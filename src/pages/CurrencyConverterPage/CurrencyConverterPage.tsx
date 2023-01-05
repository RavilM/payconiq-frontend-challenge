import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Divider, SelectChangeEvent } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import {
  PageWrapper,
  ResultConvert,
  TAmountInputOnChange,
  TCurrencyAutocompleteOnChange,
} from '../../components';
import { useFetchSymbols } from '../../hooks/useFetchSymbols';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { useFetchLatestRates } from '../../hooks/useFetchLatestRates';
import { useFetchTimeSeries } from '../../hooks/useFetchTimeSeries';
import { ConvertorToolBar, StatisticsBlock } from './components';

export const CurrencyConverterPage: FC = () => {
  const [searchParams] = useSearchParams();
  const { data: dataSymbols, loading: loadingSymbols } = useFetchSymbols();
  const {
    data: dataConvert,
    loading: loadingConvert,
    convert,
  } = useConvertCurrency();
  const {
    data: dataLatestRates,
    loading: loadingLatestRates,
    reqLatestRates,
  } = useFetchLatestRates();
  const {
    data: { records, statistics },
    loading: loadingTimeSeries,
    reqTimeSeries,
  } = useFetchTimeSeries();
  const [amount, setAmount] = useState<string>(
    searchParams.get('amount') || '',
  );
  const [fromCurrency, setFromCurrency] = useState<string | null>(
    searchParams.get('from'),
  );
  const [toCurrency, setToCurrency] = useState<string | null>(
    searchParams.get('to'),
  );
  const [period, setPeriod] = useState('seven');

  useEffect(() => {
    handleConvert();
  }, []);

  const handleChangeAmount = useCallback<TAmountInputOnChange>(
    ({ target: { value } }) => {
      setAmount(value);
    },
    [],
  );
  const handleChangeFromCurrency = useCallback<TCurrencyAutocompleteOnChange>(
    (_, value) => {
      setFromCurrency(value);
    },
    [],
  );

  const handleChangeToCurrency = useCallback<TCurrencyAutocompleteOnChange>(
    (_, value) => {
      setToCurrency(value);
    },
    [],
  );

  const handleSwitchCurrency = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  const isConvertAvailable = useMemo(
    () => !!(amount && fromCurrency && toCurrency),
    [amount, fromCurrency, toCurrency],
  );

  const handleConvert = useCallback(() => {
    if (!isConvertAvailable) return;

    convert({
      amount,
      from: fromCurrency!,
      to: toCurrency!,
    });
    reqLatestRates({
      base: toCurrency!,
      symbols: fromCurrency!,
    });
    reqTimeSeries({
      base: fromCurrency!,
      symbols: toCurrency!,
      period,
    });
  }, [
    isConvertAvailable,
    convert,
    amount,
    fromCurrency,
    toCurrency,
    reqLatestRates,
    reqTimeSeries,
    period,
  ]);

  const handleChangePeriod = useCallback(
    ({ target: { value } }: SelectChangeEvent) => {
      setPeriod(value);

      if (!dataConvert) return;

      reqTimeSeries({
        base: dataConvert.from!,
        symbols: dataConvert.to!,
        period: value,
      });
    },
    [dataConvert, reqTimeSeries],
  );

  return (
    <PageWrapper pageName="I want to convert">
      <ConvertorToolBar
        amount={amount}
        dataSymbols={dataSymbols}
        fromCurrency={fromCurrency}
        isConvertAvailable={isConvertAvailable}
        loadingConvert={loadingConvert}
        loadingSymbols={loadingSymbols}
        onChangeAmount={handleChangeAmount}
        onChangeFromCurrency={handleChangeFromCurrency}
        onChangeToCurrency={handleChangeToCurrency}
        onConvert={handleConvert}
        onSwitchCurrency={handleSwitchCurrency}
        toCurrency={toCurrency}
      />
      <ResultConvert
        amount={dataConvert?.amount}
        from={dataConvert?.from}
        rateFrom={dataConvert?.rate}
        rateTo={dataLatestRates}
        result={dataConvert?.result}
        to={dataConvert?.to}
      />
      <Divider />
      <StatisticsBlock
        onChangePeriod={handleChangePeriod}
        period={period}
        records={records}
        statistics={statistics}
      />
    </PageWrapper>
  );
};
