export const getLocal = (key: string) => {
  // let item:any = localStorage.getItem(key);
  // console.log(JSON.parse(item))
  
  return localStorage.getItem(key);
}

export const setLocal = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
}