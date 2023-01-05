import React, { FC, memo, useCallback, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { THistoryRecord } from '../../../../utils/types';
import { TRow } from './types';

export const Row: FC<TRow> = memo<TRow>(
  ({ item, columns, onDelete, onView }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleChangeVisible = useCallback(
      () => setIsVisible((prevState) => !prevState),
      [],
    );

    return (
      <TableRow
        key={item.id}
        onMouseEnter={handleChangeVisible}
        onMouseLeave={handleChangeVisible}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {columns.map(({ field, headerName, render }) => (
          <TableCell key={field}>
            {render
              ? render({
                  data: item as THistoryRecord,
                  onDelete,
                  onView,
                  isVisible,
                })
              : item[field]}
          </TableCell>
        ))}
      </TableRow>
    );
  },
);
