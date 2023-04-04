const enum localStorageKeys {
  filters = 'filters',
  cart = 'cart',
  goods = 'goods',
  totalItemsInCart = 'totalItemsInCart',
  filtered = 'filtered',
  sorted = 'sorted',
  onPage = 'onPage',
}

class LocalStorage {
  
    static setLocalStorage(
        dataKey: localStorageKeys,
        data: object | [] | string | number
    ): void {
        localStorage.setItem(dataKey, JSON.stringify(data));
    }
  
    static getLocalStorage(data: localStorageKeys){
        if (localStorage.getItem(data)) {
            return JSON.parse(String(localStorage.getItem(data)));
        }
        return "";
    }
}
  
export { LocalStorage, localStorageKeys };