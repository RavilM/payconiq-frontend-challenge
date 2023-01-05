import React, { FC, memo } from 'react';
import { Grid } from '@mui/material';
import { TableRates } from '../../../../../../components';
import { columnsRate, columnsStat } from './constants';
import { TTablesProps } from './types';
import './styles.scss';

export const Tables: FC<TTablesProps> = memo<TTablesProps>(
  ({ records, statistics }) => {
    return (
      <Grid className="tables" container spacing={2}>
        <Grid item xs={6}>
          <TableRates columns={columnsRate} data={records} />
        </Grid>
        <Grid item xs={6}>
          <TableRates columns={columnsStat} data={statistics} />
        </Grid>
      </Grid>
    );
  },
);
