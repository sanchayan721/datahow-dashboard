import React, { useState, useEffect, useMemo, useCallback } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import useGeolocation from './hooks/useGeolocation';
import { fetchWeatherForecastData } from './services/weatherForecastService';
import { Box, BoxProps, Divider, styled } from '@mui/material';
import Header from './components/Header';
import { fetchWeatherArchiveData } from './services/weatherArchiveService';
import WeatherConfig from './components/WeatherConfig';
import ContentArea from './container/ContentArea';
import { useGraphConfig } from './helpers/GraphConfigProvider';

interface WeatherDisplayProps extends BoxProps {
  children?: React.ReactNode;
};

const App: React.FC<WeatherDisplayProps> = (props) => {
  const location = useGeolocation();
  const [weatherForecastData, setWeatherForecastData] = useState<Record<string, any> | null>(null);
  const [weatherArchiveData, setWeatherArchiveData] = useState<Record<string, any> | null>(null);

  const { forecastDays } = useGraphConfig();

  const fetchWeatherData = useCallback(async () => {
    if (location) {
      try {
        const forecastData = await fetchWeatherForecastData({
          latitude: location.latitude,
          longitude: location.longitude,
          forecastDays
        });
        let twentyDaysInMilliseconds = 1728000000;

        const archiveData = await fetchWeatherArchiveData({
          startDate: new Date(Date.now() - twentyDaysInMilliseconds),
          latitude: location.latitude,
          longitude: location.longitude
        });

        setWeatherForecastData(forecastData);
        setWeatherArchiveData(archiveData);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    }
  }, [location, forecastDays]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const weatherContent = useMemo(() => {
    if (!weatherForecastData || !weatherArchiveData) {
      return (
        <p>loading...</p>
      );
    }

    return (
      <WeatherDisplay
        weatherPrediction={weatherForecastData}
        weatherArchive={weatherArchiveData}
      />
    );
  }, [weatherForecastData, weatherArchiveData]);

  const currentTemperature = useMemo(() => {
    const temp = weatherForecastData?.current?.temperature_2m;
    const scale = weatherForecastData?.current_units?.temperature_2m;

    if (!temp || !scale) {
      return 'NA';
    }

    return Number(temp).toFixed(1) + scale;
  }, [weatherForecastData]);

  const currentPrecipitation = useMemo(() => {
    const precipitation = weatherForecastData?.current?.precipitation;
    const scale = weatherForecastData?.current_units?.precipitation;

    if (!precipitation || !scale) {
      return 'NA';
    }

    return Number(precipitation).toFixed(2) + scale;
  }, [weatherForecastData]);

  return (
    <Box {...props}>
      <Header
        currentTemperature={currentTemperature}
        currentPrecipitation={currentPrecipitation}
      />
      <ContentArea>
        <WeatherConfig />
        <Divider flexItem sx={{ mx: 'auto', mt: 5, width: '5rem' }} />
        {weatherContent}
      </ContentArea>
    </Box>
  );
};

export default styled(App)(({ theme }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.default,
}));
