export type TConvertCurrencyPayload = {
  amount: string;
  from: string;
  to: string;
};

export type TConvertCurrency = (
  payload: TConvertCurrencyPayload,
) => Promise<Response>;
