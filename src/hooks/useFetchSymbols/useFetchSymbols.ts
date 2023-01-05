import { useState, useCallback, useEffect } from 'react';
import { fetchSymbols } from '../../api/exchange/fetchSymbols';
import { TFetchSymbolsResponse } from '../../api/exchange/types';
import { TUseFetchSymbols, TUseFetchSymbolsResult } from './types';

export const useFetchSymbols: TUseFetchSymbols = () => {
  const [data, setData] = useState<TUseFetchSymbolsResult['data']>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    setIsError(false);

    try {
      const response = await fetchSymbols();
      const json: TFetchSymbolsResponse = await response.json();
      const symbols = json.symbols;

      setData(Object.keys(symbols));
    } catch (error) {
      console.error(`Error with useFetchSymbols: \n ${error}`);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, loading, isError, refetch: fetch };
};
