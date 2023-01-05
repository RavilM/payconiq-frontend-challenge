type TSaveItemLocalStoragePayload = {
  key: string;
  data: any;
};

type TSaveItemLocalStorage = (payload: TSaveItemLocalStoragePayload) => void;

export const saveItemLocalStorage: TSaveItemLocalStorage = ({ key, data }) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};
