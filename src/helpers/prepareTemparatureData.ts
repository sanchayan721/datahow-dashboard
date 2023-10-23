import calculateDailyAverage from "./calculateDailyAverage";

export type WeatherPrediction = Record<string, any> | null;
export type WeatherArchive = Record<string, any> | null;

const prepareTemparatureData = (
  weatherPrediction: WeatherPrediction | undefined,
  weatherArchive: WeatherArchive | undefined
): {
  labels: string[];
  historicalData: number[];
  predictedData: number[];
  completeSet: number[];
} => {
  const dailyPrediction = weatherPrediction?.daily || {};
  const dailyAverage = calculateDailyAverage(
    dailyPrediction.temperature_2m_max,
    dailyPrediction.temperature_2m_min
  ) || [];

  const dailyArchive = weatherArchive?.daily || {};
  const dailyArchiveAverage = calculateDailyAverage(
    dailyArchive.temperature_2m_max,
    dailyArchive.temperature_2m_min
  ) || [];

  const combinedLabels = [
    ...(dailyArchive.time || []),
    ...(dailyPrediction.time || [])
  ];

  const combinedHistoricalData = [
    ...dailyArchiveAverage,
    ...dailyAverage.slice(0, 5),
    ...Array(dailyAverage.length - 5).fill(null)
  ];

  const combinedPredictedData = [
    ...Array(dailyArchiveAverage.length + 4).fill(null),
    ...dailyAverage.slice(4),
  ];

  const completeSet = [...combinedHistoricalData, ...combinedPredictedData]
    .filter(value => value !== null)
    .map(value => Number(value));

  return {
    labels: combinedLabels,
    historicalData: combinedHistoricalData,
    predictedData: combinedPredictedData,
    completeSet,
  };
};

export default prepareTemparatureData;