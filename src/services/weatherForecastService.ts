import prepareQueryParams from "../helpers/prepareQueryParams";

const BASE_URL_FORECAST = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeatherForecastData = async ({
  latitude,
  longitude,
  forecastDays = 16,
}: {
  latitude: number,
  longitude: number,
  forecastDays?: number,
}): Promise<Record<string, any>> => {

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const url_forecast = prepareQueryParams({
    baseUrl: BASE_URL_FORECAST,
    latitude,
    longitude,
    timezone,
    forecast_days: forecastDays,
    past_days: 5,
  });

  const response = await fetch(url_forecast, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  };

  return response.json();
};
