import { ENDPOINT_CONVERT } from '../endpoints';
import { TConvertCurrency } from './types';

export const convertCurrency: TConvertCurrency = (data) => {
  const query = new URLSearchParams(data);
  const queryString = query.toString();

  return fetch(`${ENDPOINT_CONVERT}${queryString ? `?${queryString}` : ''}`);
};
