import { WeatherArchive, WeatherPrediction } from "./prepareTemparatureData";

const preparePrecipitationData = (
  weatherPrediction: WeatherPrediction | undefined,
  weatherArchive: WeatherArchive | undefined
): {
  historicalData: number[];
  predictedData: number[];
} => {
  const dailyPrediction = weatherPrediction?.daily?.precipitation_sum || [];

  const dailyArchive = weatherArchive?.daily?.precipitation_sum || [];

  const combinedHistoricalData = [
    ...dailyArchive,
    ...dailyPrediction.slice(0, 5),
    ...Array(dailyPrediction.length - 5).fill(null)
  ];

  const combinedPredictedData = [
    ...Array(dailyArchive.length + 5).fill(null),
    ...dailyPrediction.slice(5),
  ];

  return {
    historicalData: combinedHistoricalData,
    predictedData: combinedPredictedData
  };
};

export default preparePrecipitationData;