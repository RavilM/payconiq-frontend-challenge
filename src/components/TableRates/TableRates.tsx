import React, { FC, memo, useMemo } from 'react';
import MUTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHeaderCell } from '../TableHeaderCell';
import { TTableRatesProps } from './types';

export const TableRates: FC<TTableRatesProps> = memo<TTableRatesProps>(
  ({ columns, data }) => {
    const getColumns = useMemo(
      () =>
        columns.map(({ field, headerName, width }) => (
          <TableHeaderCell key={field} sx={{ width }}>
            {headerName}
          </TableHeaderCell>
        )),
      [columns],
    );

    const getRows = useMemo(
      () =>
        data.map((item) => (
          <TableRow
            key={item.id}
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {columns.map(({ field, headerName, width }) => (
              <TableCell key={field}>{item[field]}</TableCell>
            ))}
          </TableRow>
        )),
      [columns, data],
    );

    return (
      <TableContainer component={Paper}>
        <MUTable aria-label="simple table">
          <TableHead>
            <TableRow>{getColumns}</TableRow>
          </TableHead>
          <TableBody>{getRows}</TableBody>
        </MUTable>
      </TableContainer>
    );
  },
);
