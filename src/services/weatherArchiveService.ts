import { dateBefore, isoTimeToDateString } from "../helpers/isoToDateString";
import prepareQueryParams from "../helpers/prepareQueryParams";

const BASE_URL_ARCHIVE = 'https://archive-api.open-meteo.com/v1/archive';

export const fetchWeatherArchiveData = async ({
  startDate,
  latitude,
  longitude,
}: {
  startDate?: Date,
  latitude: number,
  longitude: number
}): Promise<Record<string, any>> => {

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const tenDaysAgo = dateBefore(10);
  const sixDaysAgo = dateBefore(6);

  const url_archive = prepareQueryParams({

    baseUrl: BASE_URL_ARCHIVE,
    startDate: startDate ? isoTimeToDateString(startDate) : tenDaysAgo,
    endDate: sixDaysAgo,
    latitude,
    longitude,
    timezone,
  });

  const response = await fetch(url_archive, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  };

  return response.json();
};
