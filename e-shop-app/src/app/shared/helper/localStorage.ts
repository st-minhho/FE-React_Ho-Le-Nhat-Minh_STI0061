export const getLocal = (key: string) => {
  return localStorage.getItem(key);
}

export const setLocal = (key: string, value: any) => {

  if (key) {
    if (typeof value !== 'string') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
}


export const removeLocal = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};