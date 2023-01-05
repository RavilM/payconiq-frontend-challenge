import React, { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import { TableCellProps } from '@mui/material/TableCell/TableCell';
import './styles.scss';

export const TableHeaderCell: FC<TableCellProps> = (props) => (
  <TableCell className="table-header-cell" {...props} />
);
