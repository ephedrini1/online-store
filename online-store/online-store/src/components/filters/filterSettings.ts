import {DefaultFilters,  WineDetails } from "../../types/interfaces";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
import './filters.css';
export default class FilterSettings {
  filtered: WineDetails[];
  filterArr: WineDetails[];
  filtersObj : DefaultFilters;
  sorted: WineDetails[];
  constructor() {
    this.filtered = [];
    this.filterArr = [];
    this.sorted = [];
    if (localStorage.getItem('filter')) {
      this.filtersObj = LocalStorage.getLocalStorage(localStorageKeys.filter) || '';
    };
    if (localStorage.getItem('filterArr')) {
      this.filterArr = LocalStorage.getLocalStorage(localStorageKeys.filterArr) || '';
    };
    this.filtersObj = {
      color: [],
      country: [],
      year: [],
      price: [],
    }
  }
  
  filterByCountry(data: WineDetails[]) {
    if (localStorage.getItem('sorted')) {
      data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
    };
   this.filtered = [];
  
  const filters = document.querySelector('#filters');
  this.filtersObj.country = [...filters!.querySelectorAll('#country input:checked')].map(item => (item as HTMLInputElement).value);
  console.log(this.filtersObj.country);
  data.forEach(item => {
     if(this.filtersObj.country.includes(item.country)){
      this.filtered.push(item)
      console.log(this.filtered)
     }
  })
  LocalStorage.setLocalStorage(localStorageKeys.filter, this.filtersObj)
  LocalStorage.setLocalStorage(localStorageKeys.filterArr, this.filtered)
}

filterByColor(data: WineDetails[]) {
  if (localStorage.getItem('sorted')) {
    data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
  };
 
   this.filtered = [];
  const filters = document.querySelector('#filters');
  this.filtersObj.color = [...filters!.querySelectorAll('#color input:checked')].map(item => (item as HTMLInputElement).value);
  console.log(this.filtersObj.color)
  data.forEach(item => {
  if(this.filtersObj.color.includes(item.color)){
    this.filtered.push(item)
  }
})
LocalStorage.setLocalStorage(localStorageKeys.filter, this.filtersObj)
LocalStorage.setLocalStorage(localStorageKeys.filterArr, this.filtered)
}

resetFilters() {
this.filtersObj.color = [];
this.filtersObj.country = [];
const filters = document.querySelector('#filters');
[...filters!.querySelectorAll('input:checked')].map(item => (item as HTMLInputElement).checked = false);
LocalStorage.setLocalStorage(localStorageKeys.filterArr, this.filterArr);
LocalStorage.setLocalStorage(localStorageKeys.filter, this.filtersObj);

}

resetAll() {
   localStorage.clear()
}

sortPriceUp(data: WineDetails[]){
  if (localStorage.getItem('sorted')) {
    data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
  };
  this.sorted = data.sort((a, b) => {
    return +a.price - +b.price;
  })
  console.log(this.sorted);
  LocalStorage.setLocalStorage(localStorageKeys.sorted, this.sorted)
}
sortPriceDown(data: WineDetails[]){
  if (localStorage.getItem('sorted')) {
    data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
  };
  this.sorted = data.sort((a, b) => {
    return +b.price - +a.price;
  })
  console.log(this.sorted);
  LocalStorage.setLocalStorage(localStorageKeys.sorted, this.sorted)
}

}
