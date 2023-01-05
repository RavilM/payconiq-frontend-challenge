import { StandardTextFieldProps } from '@mui/material/TextField/TextField';
import { TWithRequiredProperty } from '../../types';

export type TAmountInputOnChange = TWithRequiredProperty<
  StandardTextFieldProps,
  'onChange'
>['onChange'];

export type TAmountInputProps = {
  onChange: TAmountInputOnChange;
  value: string;
};
