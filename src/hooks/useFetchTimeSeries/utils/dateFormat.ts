type TDateFormatPayload = {
  date: Date;
};

type TDateFormat = (payload: TDateFormatPayload) => string;

export const dateFormat: TDateFormat = ({ date }) => {
  const offset = date.getTimezoneOffset();

  const newDate = new Date(date.getTime() - offset * 60 * 1000);

  return newDate.toISOString().split('T')[0];
};
