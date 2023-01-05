import {
  TAmountInputOnChange,
  TCurrencyAutocompleteOnChange,
} from '../../../../components';

export type TConvertorToolBarProps = {
  onChangeAmount: TAmountInputOnChange;
  amount: string;
  loadingSymbols: boolean;
  isConvertAvailable: boolean;
  loadingConvert: boolean;
  onChangeFromCurrency: TCurrencyAutocompleteOnChange;
  onChangeToCurrency: TCurrencyAutocompleteOnChange;
  dataSymbols: string[];
  fromCurrency: string | null;
  toCurrency: string | null;
  onSwitchCurrency: VoidFunction;
  onConvert: VoidFunction;
};
