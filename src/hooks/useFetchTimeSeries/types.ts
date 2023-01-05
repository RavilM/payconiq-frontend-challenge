import { TFormatDataResult } from './utils/formatData';

export type TUseFetchTimeSeriesReqPayload = {
  base: string;
  symbols: string;
  period: string;
};

export type TUseFetchTimeSeriesReq = (
  payload: TUseFetchTimeSeriesReqPayload,
) => Promise<void>;

type TUseFetchTimeSeriesResult = {
  data: TFormatDataResult;
  reqTimeSeries: TUseFetchTimeSeriesReq;
  loading: boolean;
  isError: boolean;
};

export type TUseFetchTimeSeries = (id?: number) => TUseFetchTimeSeriesResult;
