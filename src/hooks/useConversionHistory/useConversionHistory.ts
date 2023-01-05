import { useCallback, useState } from 'react';
import { getHistoryLocalStorage } from '../../utils/getHistoryLocalStorage';
import { THistoryData } from '../../utils/types';
import { rewriteRateToHistory } from '../../utils/rewriteRateToHistory';
import { TDeleteItem, TUseConversionHistory } from './types';

export const useConversionHistory: TUseConversionHistory = () => {
  const [history, setHistory] = useState<THistoryData>(
    getHistoryLocalStorage(),
  );

  const deleteItem = useCallback<TDeleteItem>((payload) => {
    const currentHistory = getHistoryLocalStorage();

    const updatedHistory = currentHistory.filter(({ id }) => id !== payload);

    rewriteRateToHistory({ data: updatedHistory });
    setHistory(updatedHistory);
  }, []);

  return { history, deleteItem };
};
