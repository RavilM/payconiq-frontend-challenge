import { useState, useCallback } from 'react';
import { TFetchLatestRatesResponse } from '../../api/exchange/types';
import { fetchLatestRates } from '../../api/exchange/fetchLatestRates';
import { TUseFetchLatestRates, TUseConvertCurrencyConvert } from './types';

export const useFetchLatestRates: TUseFetchLatestRates = () => {
  const [data, setData] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const reqLatestRates = useCallback<TUseConvertCurrencyConvert>(
    async (payload) => {
      setLoading(true);
      setIsError(false);

      try {
        const response = await fetchLatestRates(payload);
        const json: TFetchLatestRatesResponse = await response.json();
        const rates = json.rates;

        setData(rates[payload.symbols]);
      } catch (error) {
        console.error(`Error with useFetchLatestRates: \n ${error}`);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { data, loading, isError, reqLatestRates };
};
