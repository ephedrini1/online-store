import { goods } from "../../constants/goods";
import { Wine } from "../../types/products";
import Component from "../../utils/component";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";

export default class FilterSettings {
    filtered: Wine[];
    filterPopup: Component;
    filterPopupContainer: Component;
    constructor() {
        this.filtered = LocalStorage.getLocalStorage(localStorageKeys.filtered) || [];
        this.filterPopup = new Component();
        this.filterPopupContainer = new Component(this.filterPopup.node, 'div', 'search-popup__container');
    }

    sortPriceUp(data: Wine[]) {
        const sorted = data.sort((a, b) => {
            return +a.price - +b.price;
        });
        console.log('onpage',sorted);
        LocalStorage.setLocalStorage(localStorageKeys.onPage, sorted);
        LocalStorage.setLocalStorage(localStorageKeys.sorted, sorted);
    }

    sortPriceDown(data: Wine[]) {
        const sorted = data.sort((a, b) => {
            return +b.price - +a.price;
        });
        LocalStorage.setLocalStorage(localStorageKeys.onPage, sorted);
        LocalStorage.setLocalStorage(localStorageKeys.sorted, sorted);
    }

    getFilters() {
        let filters;
        const countryFilters: string[] = [];
        const colorFilters: string[] = [];
        const countrycheckedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked.country'));
        const colorcheckedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked.color'));
        countrycheckedCheckboxes.forEach(item => countryFilters.push((item as HTMLInputElement).value));
        colorcheckedCheckboxes.forEach(item => colorFilters.push((item as HTMLInputElement).value));
        LocalStorage.setLocalStorage(localStorageKeys.filters, { country: countryFilters, color: colorFilters });
        return filters = { country: countryFilters, color: colorFilters };
    }

    filter() {
        const filters = this.getFilters();
        let filtered: Wine[] = [];
        const filterCountry = filters.country;
        const filterColor = filters.color;
        const data: Wine[] = goods;
  
        if (!filterColor.length && !filterCountry.length) {
            filtered = goods;
        }
        else if (!filterCountry.length) {
            data.forEach(() => {
                filtered = data.filter(item => filterColor.includes(item.color));
            });
        }
        else if (!filterColor.length) {
            data.forEach(() => {
                filtered = data.filter(item => filterCountry.includes(item.country));
            });
        }
        else {
            data.forEach(() => {
                filtered = data.filter(item => filterCountry.includes(item.country) && filterColor.includes(item.color));
            });
        }
        LocalStorage.setLocalStorage(localStorageKeys.onPage, filtered);
    }

    openPopup() {
        this.filterPopupContainer = new Component(document.body, 'div', 'cart__error');
        this.filterPopupContainer.node.innerHTML = `
      <p class="error__message">По данному запросу ничего не найдено</p>
      <button class="error__btn filter__btn" >Ok</button>`;
      document.querySelector('.overlay')!.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    popupClose() {
        this.filterPopupContainer.destroy();
    document.querySelector('.overlay')!.classList.remove('active');
    document.body.style.overflow = 'scroll';
    }

    resetAll() {
        localStorage.clear();
    }

    resetFilters() {
        localStorage.removeItem(localStorageKeys.filters);
        localStorage.removeItem(localStorageKeys.onPage);
        location.reload();
    }
}
