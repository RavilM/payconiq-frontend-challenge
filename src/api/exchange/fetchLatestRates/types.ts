export type TFetchLatestRatesPayload = {
  base: string;
  symbols: string;
};

export type TFetchLatestRates = (
  payload: TFetchLatestRatesPayload,
) => Promise<Response>;
