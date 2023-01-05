import { ENDPOINT_TIME_SERIES } from '../endpoints';
import { TFetchTimeSeries } from './types';

export const fetchTimeSeries: TFetchTimeSeries = (data) => {
  const query = new URLSearchParams(data);
  const queryString = query.toString();

  return fetch(
    `${ENDPOINT_TIME_SERIES}${queryString ? `?${queryString}` : ''}`,
  );
};
