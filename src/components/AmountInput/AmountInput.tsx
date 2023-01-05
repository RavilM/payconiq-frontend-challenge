import React, { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { TAmountInputProps } from './types';

export const AmountInput: FC<TAmountInputProps> = memo<TAmountInputProps>(
  ({ onChange, value }) => {
    return (
      <TextField
        label="Amount"
        onChange={onChange}
        type="number"
        value={value}
        variant="standard"
      />
    );
  },
);
