export type THistoryRecord = {
  id: number;
  date: Date;
  amount: number;
  to: string;
  from: string;
};

export type THistoryData = THistoryRecord[];
