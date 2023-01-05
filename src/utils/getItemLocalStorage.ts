type TGetItemLocalStoragePayload = {
  key: string;
};

type TGetItemLocalStorage = (
  payload: TGetItemLocalStoragePayload,
) => string | null;

export const getItemLocalStorage: TGetItemLocalStorage = ({ key }) =>
  window.localStorage.getItem(key);
