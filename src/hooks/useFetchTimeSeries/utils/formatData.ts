import { TFetchTimeSeriesResponse } from '../../../api/exchange/types';
import { mapperPeriod } from '../constants';

type TFormatDataPayload = {
  rates: TFetchTimeSeriesResponse['rates'];
  symbols: string;
  period: string;
};

export type TRecords = {
  id: string;
  rate: number;
  date: string;
}[];

export type TStatistics = {
  id: string;
  rate: number;
  name: string;
}[];

export type TFormatDataResult = {
  records: TRecords;
  statistics: TStatistics;
};

type TFormatData = (payload: TFormatDataPayload) => TFormatDataResult;

export const formatData: TFormatData = ({ rates, symbols, period }) => {
  const records: TRecords = [];
  let maxRate = -Infinity;
  let minRate = Infinity;
  let avrRate = 0;
  let counter = 0;

  const keysRate = Object.keys(rates).reverse();

  // eslint-disable-next-line guard-for-in
  for (const date of keysRate) {
    if (counter === mapperPeriod[period]) break;

    const value = rates[date];
    const rate = value[symbols];

    if (!rate) continue;
    counter++;

    maxRate = Math.max(maxRate, rate);
    minRate = Math.min(minRate, rate);

    avrRate += rate;

    records.push({ id: date, rate, date });
  }

  avrRate /= mapperPeriod[period];

  const statistics: TStatistics = [
    { name: 'Lowest', rate: minRate, id: 'Lowest' },
    { name: 'Highest', rate: maxRate, id: 'Highest' },
    { name: 'Average', rate: avrRate, id: 'Average' },
  ];

  return { records, statistics };
};
