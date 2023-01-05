import React, { FC, useCallback } from 'react';
import Button from '@mui/material/Button';
import { DeleteForever, RemoveRedEye } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  TableHistory,
  TColumn,
  TRenderOnView,
} from '../../components/TableHistory';
import { useConversionHistory } from '../../hooks/useConversionHistory';
import { PageWrapper } from '../../components';

const columns: TColumn[] = [
  { field: 'date', headerName: 'Date', width: 70 },
  {
    field: 'event',
    headerName: 'Event',
    width: 130,
    render: ({ data: { amount, from, to } }) => (
      <>{`Converted an amount of ${amount} from ${from} to ${to}`}</>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    minWidth: 330,
    render: ({ data, onDelete, onView, isVisible }) => {
      if (!isVisible) return <></>;
      const handleDelete = () => onDelete?.(data.id);
      const handleView = () => onView?.(data);

      return (
        <>
          <Button onClick={handleView} size="small" variant="text">
            <RemoveRedEye /> View
          </Button>
          <Button onClick={handleDelete} size="small" variant="text">
            <DeleteForever /> Delete from history
          </Button>
        </>
      );
    },
  },
];

export const ConversionHistoryPage: FC = () => {
  const navigate = useNavigate();
  const { history, deleteItem } = useConversionHistory();

  const handleView = useCallback<TRenderOnView>(
    ({ amount, from, to }) => {
      const query = new URLSearchParams({
        amount: `${amount}`,
        from,
        to,
      });
      const queryString = query.toString();

      navigate(`/?${queryString}`);
    },
    [navigate],
  );

  return (
    <PageWrapper pageName="Conversion history">
      <TableHistory
        columns={columns}
        data={history}
        onDelete={deleteItem}
        onView={handleView}
      />
    </PageWrapper>
  );
};
