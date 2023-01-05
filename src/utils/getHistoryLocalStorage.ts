import { getItemLocalStorage } from './getItemLocalStorage';
import { KEY_CONVERSION_HISTORY } from './constants';
import { THistoryData } from './types';

type TGetItemLocalStorage = () => THistoryData;

export const getHistoryLocalStorage: TGetItemLocalStorage = () => {
  const history = getItemLocalStorage({ key: KEY_CONVERSION_HISTORY });

  if (!history) return [];

  return JSON.parse(history);
};
