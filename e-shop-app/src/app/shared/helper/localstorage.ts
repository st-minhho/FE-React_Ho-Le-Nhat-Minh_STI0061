export const GetLocal = (key: string) => {
  return localStorage.getItem(key);
};

export const SetLocal = (key: string, value: any) => {
  if (key) {
    if (typeof value !== 'string') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
};

export const RemoveLocal = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
