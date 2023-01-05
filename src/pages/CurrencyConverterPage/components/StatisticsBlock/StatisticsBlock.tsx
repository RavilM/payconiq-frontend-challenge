import React, { FC, memo, useState } from 'react';
import Typography from '@mui/material/Typography';
import {
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import { Tables, Charts } from './components';
import { TStatisticsBlockProps } from './types';
import './styles.scss';

export const StatisticsBlock: FC<TStatisticsBlockProps> =
  memo<TStatisticsBlockProps>(
    ({ onChangePeriod, period, statistics, records }) => {
      const [isChartVisualisation, setIsChartVisualisation] = useState(false);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChartVisualisation(event.target.value === 'chart');
      };

      return (
        <>
          <Grid container>
            <Grid item>
              <Typography className="statistics-block-title" variant="h5">
                Exchange History
              </Typography>
            </Grid>
            <Grid>
              <RadioGroup onChange={handleChange} row>
                <FormControlLabel
                  control={<Radio />}
                  label="Table"
                  value="table"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Chart"
                  value="chart"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Select
            label="Duration"
            onChange={onChangePeriod}
            sx={{ width: 167 }}
            value={period}
            variant="standard"
          >
            <MenuItem value="seven">7 days</MenuItem>
            <MenuItem value="fourteen">14 days</MenuItem>
            <MenuItem value="thirty">30 days</MenuItem>
          </Select>
          {isChartVisualisation ? (
            <Charts records={records} statistics={statistics} />
          ) : (
            <Tables records={records} statistics={statistics} />
          )}
        </>
      );
    },
  );
