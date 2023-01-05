import { TColumn, TRenderOnView } from '../../types';
import { TDeleteItem } from '../../../../hooks/useConversionHistory';

export type TRow = {
  item: { id: number } & Record<string, any>;

  columns: TColumn[];
  onDelete: TDeleteItem;
  onView: TRenderOnView;
};
