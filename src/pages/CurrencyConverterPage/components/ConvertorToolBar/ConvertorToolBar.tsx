import React, { FC, memo } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { CompareArrows } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { AmountInput, CurrencyAutocomplete } from '../../../../components';
import { TConvertorToolBarProps } from './types';
import './styles.scss';

export const ConvertorToolBar: FC<TConvertorToolBarProps> =
  memo<TConvertorToolBarProps>(
    ({
      onChangeAmount,
      amount,
      loadingSymbols,
      onChangeFromCurrency,
      dataSymbols,
      fromCurrency,
      toCurrency,
      onSwitchCurrency,
      onChangeToCurrency,
      isConvertAvailable,
      loadingConvert,
      onConvert,
    }) => {
      return (
        <Grid
          alignItems="center"
          className="convertor-tool-bar"
          container
          spacing={2}
        >
          <Grid item xs={2}>
            <AmountInput onChange={onChangeAmount} value={amount} />
          </Grid>
          <Grid item xs={4}>
            <CurrencyAutocomplete
              label="From"
              loading={loadingSymbols}
              onChange={onChangeFromCurrency}
              options={dataSymbols}
              value={fromCurrency}
            />
          </Grid>
          <Grid item>
            <Button className={'switch-button'} onClick={onSwitchCurrency} variant="contained">
              <CompareArrows />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <CurrencyAutocomplete
              label="To"
              loading={loadingSymbols}
              onChange={onChangeToCurrency}
              options={dataSymbols}
              value={toCurrency}
            />
          </Grid>
          <Grid item>
            <LoadingButton
              disabled={!isConvertAvailable}
              loading={loadingConvert}
              onClick={onConvert}
              variant="contained"
            >
              Convert
            </LoadingButton>
          </Grid>
        </Grid>
      );
    },
  );
