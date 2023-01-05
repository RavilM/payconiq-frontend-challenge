import React, { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import { TResultConvertProps } from './types';
import './styles.scss';

export const ResultConvert: FC<TResultConvertProps> = memo<TResultConvertProps>(
  ({ amount, from, to, result, rateFrom, rateTo }) => {
    if (!amount || !from || !to || !result || !rateFrom || !rateTo) return null;

    return (
      <div className="result-convert-container">
        <div className="conversion-result">
          <Typography className="from-text-conversion">{`${amount} ${from} = \u202f`}</Typography>
          <Typography className="to-text-conversion">{` ${result} ${to}`}</Typography>
        </div>
        <div>
          <Typography>{`1 ${from} = ${rateFrom} ${to}`}</Typography>
        </div>
        <div>
          <Typography>{`1 ${to} = ${rateTo} ${from}`}</Typography>
        </div>
      </div>
    );
  },
);
