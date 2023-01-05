import { useState, useCallback } from 'react';
import { TFetchTimeSeriesResponse } from '../../api/exchange/types';
import { fetchTimeSeries } from '../../api/exchange/fetchTimeSeries';
import { TUseFetchTimeSeries, TUseFetchTimeSeriesReq } from './types';
import { dateFormat } from './utils/dateFormat';
import { calculateDate } from './utils/calculateDate';
import { formatData, TFormatDataResult } from './utils/formatData';

export const useFetchTimeSeries: TUseFetchTimeSeries = () => {
  const [data, setData] = useState<TFormatDataResult>({
    records: [],
    statistics: [],
  });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const reqTimeSeries = useCallback<TUseFetchTimeSeriesReq>(
    async ({ period, ...rest }) => {
      setLoading(true);
      setIsError(false);

      try {
        const response = await fetchTimeSeries({
          ...rest,
          end_date: dateFormat({ date: new Date() }),
          start_date: dateFormat({ date: calculateDate({ period }) }),
        });
        const json: TFetchTimeSeriesResponse = await response.json();
        const { rates } = json;

        const preparedData = formatData({
          rates,
          symbols: rest.symbols,
          period,
        });

        setData(preparedData);
      } catch (error) {
        console.error(`Error with useFetchTimeSeries: \n ${error}`);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { data, loading, isError, reqTimeSeries };
};
