import { saveItemLocalStorage } from './saveItemLocalStorage';
import { KEY_CONVERSION_HISTORY } from './constants';
import { THistoryData } from './types';

type TRewriteRateToHistoryPayload = {
  data: THistoryData;
};

type TRewriteRateToHistory = (payload: TRewriteRateToHistoryPayload) => void;

export const rewriteRateToHistory: TRewriteRateToHistory = ({ data }) => {
  saveItemLocalStorage({ key: KEY_CONVERSION_HISTORY, data });
};
