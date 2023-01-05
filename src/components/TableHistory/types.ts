import { GridColDef } from '@mui/x-data-grid';
import { ReactElement } from 'react';
import { THistoryRecord } from '../../utils/types';
import { TDeleteItem } from '../../hooks/useConversionHistory';

export type TRenderOnView = (data: THistoryRecord) => void;

export type TRenderPayload = {
  data: THistoryRecord;
  onDelete?: TDeleteItem;
  onView?: TRenderOnView;
  isVisible?: boolean;
};

export type TColumn = GridColDef & {
  render?: (payload: TRenderPayload) => ReactElement;
};

export type TTableHistoryProps = {
  columns: TColumn[];
  data: ({ id: number } & Record<string, any>)[];
  onDelete: TDeleteItem;
  onView: TRenderOnView;
};
