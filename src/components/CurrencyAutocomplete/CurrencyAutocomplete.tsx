import React, { FC, memo } from 'react';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { TCurrencyAutocompleteProps } from './types';

export const CurrencyAutocomplete: FC<TCurrencyAutocompleteProps> =
  memo<TCurrencyAutocompleteProps>(
    ({ loading, onChange, options, label, value }) => {
      return (
        <Autocomplete<string>
          loading={loading}
          onChange={onChange}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
              label={label}
              variant="standard"
            />
          )}
          // sx={{ width: 300 }}
          value={value}
        />
      );
    },
  );
