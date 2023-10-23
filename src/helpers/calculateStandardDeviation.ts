function calculateStandardDeviation(values: number[]): number {
  if (values.length === 0) return 0;

  // Calculate mean of the values
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;

  // Calculate the variance
  const variance = values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;

  // Standard deviation is the square root of variance
  return Math.sqrt(variance);
}

export default calculateStandardDeviation;
