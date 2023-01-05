import React, { FC, memo, useMemo } from 'react';
import MUTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHeaderCell } from '../TableHeaderCell';
import { TTableHistoryProps } from './types';
import { Row } from './components';

export const TableHistory: FC<TTableHistoryProps> = memo<TTableHistoryProps>(
  ({ columns, data, onDelete, onView }) => {
    const getColumns = useMemo(
      () =>
        columns.map(({ field, headerName, minWidth }) => (
          <TableHeaderCell key={field} sx={{ width: minWidth }}>
            {headerName}
          </TableHeaderCell>
        )),
      [columns],
    );

    const getRows = useMemo(
      () =>
        data.map((item) => (
          <Row
            columns={columns}
            item={item}
            onDelete={onDelete}
            onView={onView}
          />
        )),
      [columns, data, onDelete, onView],
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
