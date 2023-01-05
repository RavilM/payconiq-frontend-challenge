import { mapperPeriod } from '../constants';

type TCalculateDatePayload = {
  period: string;
};

type TCalculateDate = (payload: TCalculateDatePayload) => Date;

const TIME_DAY = 86400000;

export const calculateDate: TCalculateDate = ({ period }) => {
  const currentDate = new Date();

  const timePeriod = mapperPeriod[period] * TIME_DAY;
  const diffTime = currentDate.getTime() - timePeriod;

  return new Date(diffTime);
};
