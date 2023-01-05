export type TFetchTimeSeriesPayload = {
  base: string;
  symbols: string;
  start_date: string;
  end_date: string;
};

export type TFetchTimeSeries = (
  payload: TFetchTimeSeriesPayload,
) => Promise<Response>;
