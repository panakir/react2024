const isClient = typeof window !== "undefined";

const setDataToLocalStorage = (key: string, value: string): void => {
  if (isClient) localStorage.setItem(key, value);
};

const getDataFromLocalStorage = (key: string): string => {
  if (isClient) {
    return localStorage.getItem(key) ?? "";
  }
  return "";
};

export { setDataToLocalStorage, getDataFromLocalStorage };
