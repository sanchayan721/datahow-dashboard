const calculateDailyAverage = (
  maxSet?: [number],
  minSet?: [number]
) => {

  if (!maxSet && !minSet) return [];
  if (!maxSet) return minSet;
  if (!minSet) return maxSet;

  return minSet.map((_: number, index: number) => {
    const max = maxSet[index] || 0;
    const min = minSet[index] || 0;
    return ((max + min) / 2).toFixed(1);
  });
};

export default calculateDailyAverage;