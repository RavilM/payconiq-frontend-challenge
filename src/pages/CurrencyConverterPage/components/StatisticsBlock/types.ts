import { SelectChangeEvent } from '@mui/material';
import { TTablesProps } from './components/Tables/types';

export type TStatisticsBlockProps = {
  onChangePeriod(event: SelectChangeEvent): void;
  period: string;
} & TTablesProps;
