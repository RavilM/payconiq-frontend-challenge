import { ENDPOINT_LATEST } from '../endpoints';
import { TFetchLatestRates } from './types';

export const fetchLatestRates: TFetchLatestRates = (data) => {
  const query = new URLSearchParams(data);
  const queryString = query.toString();

  return fetch(`${ENDPOINT_LATEST}${queryString ? `?${queryString}` : ''}`);
};
