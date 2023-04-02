import { goods } from "../../constats/goods";
import { Wine } from "../../types/products";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
// import { CartSettings } from "../cart/cart";
// import './filters.css';

export default class FilterSettings {
    filtered: Wine[];
    //   filterArr: Wine[];
    //   filtersObj : DefaultFilters;
    sorted: Wine[];
    constructor() {
        this.filtered = [];
        //     this.filterArr = [];
        this.sorted = LocalStorage.getLocalStorage(localStorageKeys.sorted) || goods;
        //     this.filtersObj = {
        //       color: [],
        //       country: [],
        //       year: [],
        //       price: [],
        //     }
        //     if (localStorage.getItem('filter')) {
        //       this.filtersObj = LocalStorage.getLocalStorage(localStorageKeys.filter) || '';
        //     };
        //     if (localStorage.getItem('filterArr')) {
        //       this.filterArr = LocalStorage.getLocalStorage(localStorageKeys.filterArr) || '';
    };

    //   }

    //   filterByCountry(data: Wine[]) {
    //     if (localStorage.getItem('sorted')) {
    //       data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
    //     };

    // //    this.filtered = [];
    // //   const filters = document.querySelectorAll('#filters');
    // //   this.filtersObj.country = filters.node.map(item => (item as HTMLInputElement).value);
    // //   console.log(this.filtersObj.country);
    // //   data.forEach(item => {
    // //      if(this.filtersObj.country.includes(item.country)){
    // //       this.filtered.push(item)
    // //       console.log(this.filtered)
    // //      }
    // //   })
    // //   LocalStorage.setLocalStorage(localStorageKeys.filter, this.filtersObj)
    // //   LocalStorage.setLocalStorage(localStorageKeys.filterArr, this.filtered)
    // // }

    // // filterByColor(data: WineDetails[]) {
    // //   localStorage.removeItem(localStorageKeys.filterArr);
    // //   if (localStorage.getItem('sorted')) {
    // //     data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
    // //   };

    // //    this.filtered = [];
    // //   const filters = document.querySelector('#filters');
    // //   this.filtersObj.color = [...filters!.querySelectorAll('#color input:checked')].map(item => (item as HTMLInputElement).value);
    // //   console.log(this.filtersObj.color)
    // //   data.forEach(item => {
    // //   if(this.filtersObj.color.includes(item.color)){
    // //     this.filtered.push(item)
    // //   }
    // // })
    // // LocalStorage.setLocalStorage(localStorageKeys.filter, this.filtersObj)
    // // LocalStorage.setLocalStorage(localStorageKeys.filterArr, this.filtered)
    // // }

    // // resetFilters() {
    // // this.filtersObj.color = [];
    // // this.filtersObj.country = [];
    // // const filters = document.querySelector('#filters');
    // // [...filters!.querySelectorAll('input:checked')].map(item => (item as HTMLInputElement).checked = false);
    // // LocalStorage.setLocalStorage(localStorageKeys.filterArr, this.filterArr);
    // // LocalStorage.setLocalStorage(localStorageKeys.filter, this.filtersObj);

    // // }

    resetAll() {
        localStorage.clear();
    }

    sortPriceUp(data: Wine[]) {
        data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;

        this.sorted = data.sort((a, b) => {
            return +a.price - +b.price;
        })
        console.log(this.sorted);
        LocalStorage.setLocalStorage(localStorageKeys.sorted, this.sorted)
    }

    sortPriceDown(data: Wine[]) {
        data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;

        this.sorted = data.sort((a, b) => {
            return +b.price - +a.price;
        })
        console.log(this.sorted);
        LocalStorage.setLocalStorage(localStorageKeys.sorted, this.sorted)
    }

}
