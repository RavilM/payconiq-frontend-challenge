import { saveItemLocalStorage } from './saveItemLocalStorage';
import { KEY_CONVERSION_HISTORY } from './constants';
import { getHistoryLocalStorage } from './getHistoryLocalStorage';
import { THistoryRecord } from './types';

type TSaveRateLocalStoragePayload = {
  data: Omit<THistoryRecord, 'id'>;
};

type TSaveRateLocalStorage = (payload: TSaveRateLocalStoragePayload) => void;

export const saveRateToHistory: TSaveRateLocalStorage = ({ data }) => {
  const history = getHistoryLocalStorage();

  const id = history.length ? history[history.length - 1].id + 1 : 0;

  history.push({ ...data, id });

  saveItemLocalStorage({ key: KEY_CONVERSION_HISTORY, data: history });
};
