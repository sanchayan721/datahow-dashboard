export const isoTimeToDateString = (isoTime: Date): string => isoTime.toISOString().split('T')[0];

export const dateBefore = (days: number, date?: Date): string => {
  if (!date)
    return new Date(Date.now() - days * 86400000)
      .toISOString()
      .split('T')[0]

  return new Date(date.getTime() - days * 86400000)
    .toISOString()
    .split('T')[0]
};