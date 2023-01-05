import { TConvertCurrencyPayload } from '../../api/exchange/convertCurrency';

export type TUseConvertCurrencyConvert = (
  payload: TConvertCurrencyPayload,
) => Promise<void>;

export type TConvertCurrencyData = {
  result: number;
  rate: number;
  from: string;
  to: string;
  amount: number;
};

type TUseConvertCurrencyResult = {
  data?: TConvertCurrencyData;
  convert: TUseConvertCurrencyConvert;
  loading: boolean;
  isError: boolean;
};

export type TUseConvertCurrency = (id?: number) => TUseConvertCurrencyResult;
