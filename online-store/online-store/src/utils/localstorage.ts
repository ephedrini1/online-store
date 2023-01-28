import { Wine } from "../types/products";

const enum localStorageKeys {
  filter = 'filter',
  cart = 'cart',
  goods  = 'goods',
  totalItemsInCart = 'totalItemsInCart',
  filterArr = 'filterArr',
  sorted = 'sorted',
}

class LocalStorage {
  
    static setLocalStorage(
      dataKey: localStorageKeys,
      data: object | [] | string | number
    ): void {
      localStorage.setItem(dataKey, JSON.stringify(data));
    }
  
    static getLocalStorage(data: localStorageKeys): any {
      if (localStorage.getItem(data)) {
        return JSON.parse(String(localStorage.getItem(data)));
      }
      return "";
    }
  }
  
  export { LocalStorage, localStorageKeys };