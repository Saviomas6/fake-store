export const apiUrl = "https://fakestoreapi.com";

export const debounce = (fn: any, delay: number) => {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
