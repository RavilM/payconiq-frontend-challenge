import { UseAutocompleteProps } from '@mui/base/AutocompleteUnstyled/useAutocomplete';
import { TWithRequiredProperty } from '../../types';

export type TCurrencyAutocompleteOnChange = TWithRequiredProperty<
  UseAutocompleteProps<string, undefined, undefined, undefined>,
  'onChange'
>['onChange'];

export type TCurrencyAutocompleteProps = {
  loading: boolean;
  onChange: TCurrencyAutocompleteOnChange;
  options: string[];
  label: string;
  value: string | null;
};
