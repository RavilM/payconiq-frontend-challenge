import { GridColDef } from '@mui/x-data-grid';

export const columnsRate: GridColDef[] = [
  { field: 'date', headerName: 'Date' },
  { field: 'rate', headerName: 'Exchange rate' },
];

export const columnsStat: GridColDef[] = [
  { field: 'name', headerName: 'Statistics' },
  { field: 'rate', headerName: '' },
];
