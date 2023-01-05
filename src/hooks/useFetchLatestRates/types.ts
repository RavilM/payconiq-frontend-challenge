import { TFetchLatestRatesPayload } from '../../api/exchange/fetchLatestRates';

export type TUseConvertCurrencyConvert = (
  payload: TFetchLatestRatesPayload,
) => Promise<void>;

type TUseFetchLatestRatesResult = {
  data?: number;
  reqLatestRates: TUseConvertCurrencyConvert;
  loading: boolean;
  isError: boolean;
};

export type TUseFetchLatestRates = (id?: number) => TUseFetchLatestRatesResult;
