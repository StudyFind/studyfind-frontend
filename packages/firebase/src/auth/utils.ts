export type DoesUserExistValue = "Yes" | "No";

const setLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setDoesUserExist = (value: DoesUserExistValue) => {
  setLocalStorage("does-user-exist", value);
};

export const getDoesUserExist = (): DoesUserExistValue => {
  return (getLocalStorage("does-user-exist") || "No") as DoesUserExistValue;
};
