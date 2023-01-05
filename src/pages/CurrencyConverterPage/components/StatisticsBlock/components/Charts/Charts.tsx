import React, { FC, memo } from 'react';
import { Grid, Paper } from '@mui/material';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  BarSeries,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';
import { TChartsProps } from './types';

export const Charts: FC<TChartsProps> = memo<TChartsProps>(
  ({ records, statistics }) => {
    return (
      <Grid className="tables" container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Chart data={records}>
              <ArgumentAxis />
              <ValueAxis />
              <LineSeries argumentField="date" valueField="rate" />
            </Chart>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Chart data={statistics}>
              <ArgumentAxis />
              <ValueAxis />
              <BarSeries argumentField="name" valueField="rate" />
              <EventTracker />
              <Tooltip />
            </Chart>
          </Paper>
        </Grid>
      </Grid>
    );
  },
);
