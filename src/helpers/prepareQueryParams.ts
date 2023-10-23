const prepareQueryParams = (params: Record<string, any>): string => {
  const {
    baseUrl,
    startDate,
    endDate,
    latitude,
    longitude,
    forecast_days,
    past_days,
    timezone
  } = params;

  const queryParams: { [key: string]: any } = {
    latitude,
    longitude,
    start_date: startDate,
    end_date: endDate,
    daily: 'temperature_2m_min,temperature_2m_max,precipitation_sum',
    current: 'temperature_2m,is_day,precipitation',
    forecast_days: forecast_days || null,
    past_days: past_days || null,
    timezone
  };

  const queryString = Object.keys(queryParams)
    .filter((key) => queryParams[key] !== undefined && queryParams[key] !== null)
    .map((key) => `${key}=${queryParams[key]}`)
    .join('&');
    
  return `${baseUrl}?${queryString}`;
};

export default prepareQueryParams;