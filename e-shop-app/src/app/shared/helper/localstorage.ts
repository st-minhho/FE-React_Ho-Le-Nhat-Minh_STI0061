export const getStorage = (key: string, defaultValue: any) => {
  const item = localStorage.getItem(key)
  if(item){
    return JSON.parse(item)
  }
  return defaultValue;
};

export const setStorage = (key: string, value: any) => {
  if (key) {
    if (typeof value !== 'string') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
};

export const removeStorage = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
