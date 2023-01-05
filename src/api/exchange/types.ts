export type TFetchResponseWrapper = {
  motd: Record<string, string>;
  success: boolean;
};

export type TSymbolDetail = {
  description: string;
  code: string;
};

export type TSymbol = Record<string, TSymbolDetail>;
export type TSymbols = TSymbol[];

export type TFetchSymbolsResponse = TFetchResponseWrapper & {
  symbols: TSymbols;
};

export type TRates = Record<string, number>;

export type TFetchLatestRatesResponse = TFetchResponseWrapper & {
  date: string;
  base: string;
  rates: TRates;
};

export type TConvertCurrencyQuery = {
  from: string;
  to: string;
  amount: number;
};

export type TConvertCurrencyResponse = TFetchResponseWrapper & {
  date: string;
  historical: boolean;
  info: { rate: number };
  result: number;
  query: TConvertCurrencyQuery;
};

export type TFetchTimeSeriesResponse = TFetchResponseWrapper & {
  timeseries: boolean;
  start_date: string;
  end_date: string;
  base: string;
  rates: Record<string, TRates>;
};
