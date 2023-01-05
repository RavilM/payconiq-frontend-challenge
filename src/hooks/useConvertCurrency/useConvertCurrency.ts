import { useState, useCallback } from 'react';
import { TConvertCurrencyResponse } from '../../api/exchange/types';
import { convertCurrency } from '../../api/exchange/convertCurrency';
import { saveRateToHistory } from '../../utils/saveRateToHistory';
import {
  TConvertCurrencyData,
  TUseConvertCurrency,
  TUseConvertCurrencyConvert,
} from './types';

export const useConvertCurrency: TUseConvertCurrency = () => {
  const [data, setData] = useState<TConvertCurrencyData>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const convert = useCallback<TUseConvertCurrencyConvert>(async (payload) => {
    setLoading(true);
    setIsError(false);

    try {
      const response = await convertCurrency(payload);
      const json: TConvertCurrencyResponse = await response.json();
      const {
        result,
        info: { rate },
        query: { from, to, amount },
      } = json;

      setData({ result, rate, from, to, amount });

      saveRateToHistory({
        data: {
          amount,
          date: new Date(),
          from,
          to,
        },
      });
    } catch (error) {
      console.error(`Error with useConvertCurrency: \n ${error}`);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, isError, convert };
};
