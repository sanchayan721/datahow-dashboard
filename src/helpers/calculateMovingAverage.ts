import calculateStandardDeviation from "./calculateStandardDeviation";

function calculateMovingAverage(data: number[], N: number): {
  movingAverages: number[];
  errorMargins: number[]
} {
  const averages = [];
  const errorMargins = [];

  for (let i = 0; i <= data.length - N; i++) {
    const currentSegment = data.slice(i, i + N);
    const average = currentSegment.reduce((acc, value) => acc + value, 0) / N;
    averages.push(average);

    const std = calculateStandardDeviation(currentSegment);
    errorMargins.push(1.96 * std);
  }

  return { movingAverages: averages, errorMargins };
}

export default calculateMovingAverage;
