import { GridColDef } from '@mui/x-data-grid';

export type TTableRatesProps = {
  columns: GridColDef[];
  data: ({ id: string } & Record<string, any>)[];
};
