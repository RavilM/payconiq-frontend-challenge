import { THistoryData, THistoryRecord } from '../../utils/types';

export type TDeleteItem = (id: THistoryRecord['id']) => void;

export type TUseConversionHistoryResult = {
  history: THistoryData;
  deleteItem: TDeleteItem;
};

export type TUseConversionHistory = () => TUseConversionHistoryResult;
