import { Wine } from "./types/products";
import { CartSettings } from "./components/cart/cart";
import WineCards from "./components/winecards/winecards";
import Header from "./html-components/header/header";
import Main from "./html-components/main/main";
import FilterSettings from "./components/filters/filterSettings";
import Filters from "./html-components/filters/filters";
import { LocalStorage, localStorageKeys } from "./utils/localstorage";
import { goods } from "./constats/goods";
import Component from "./utils/component";
import Search from "./components/search/search";
import Footer from "./html-components/footer/footer";

export default class App {
  private static container: HTMLElement = document.body;
  private header: Header;
  private main: Main;
  private footer: Footer;
  cartsettings: CartSettings;
  winecards: WineCards;
  filterSettings: FilterSettings;
  search: Search;
  constructor() {
    this.cartsettings = new CartSettings();
    this.winecards = new WineCards();
    this.filterSettings = new FilterSettings();
    this.header = new Header('header', 'header');
    this.main = new Main('main', 'main');
    this.footer = new Footer('footer', 'footer');
    this.search = new Search();
  }

  start(data: Wine[]) {
    if (localStorage.getItem('sorted')) {
      data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
    };
    if (localStorage.getItem('filter')) {
      this.filterSettings.filtersObj = LocalStorage.getLocalStorage(localStorageKeys.filter) || '';
    };

    App.container.append(this.header.render());
    App.container.append(this.main.render());
    App.container.append(this.footer.render());

    const countryFilters = document.querySelector('.country-filter');
    const colorFilters = document.querySelector('.color-filter');

    this.winecards.render(data);
    this.cartsettings.render();

    const filters = document.querySelector('#filters');
    [...filters!.querySelectorAll('input')].forEach(item => {
      if (this.filterSettings.filtersObj.country.includes(item.value)) {
        item.checked = true;
        this.filterSettings.filterByCountry(data);
        this.winecards.render(this.filterSettings.filtered);
      }
      if (this.filterSettings.filtersObj.color.includes(item.value)) {
        item.checked = true;
        this.filterSettings.filterByColor(data);
        this.winecards.render(this.filterSettings.filtered);
      }
    })

    colorFilters!.addEventListener('input', event => {
      this.filterSettings.filterByColor(data);
      this.winecards.render(this.filterSettings.filtered);

    })
    countryFilters!.addEventListener('input', event => {
      this.filterSettings.filterByCountry(data);
      this.winecards.render(this.filterSettings.filtered);

    })
   
    document.querySelector('.search-container__input')!
    .addEventListener('input', event => {
      this.search.search(data);
      console.log(this.search.searchData)
      this.winecards.render(this.search.searchData);
    })
    document
      .querySelector('.reset-filters')!
      .addEventListener('click', event => {
        event.preventDefault()
        this.filterSettings.resetFilters();
        this.winecards.render(data);
      })

    document.addEventListener('click', event => {
      if ((<HTMLElement>event.target)!.classList.contains('cart__add')) {
        let articul = Number((<HTMLElement>event.target)!.dataset['articul'])!;
        console.log(articul)
        console.log(event.target)
        if (this.cartsettings.totalItems < 20) {
          this.cartsettings.cartAdd(data, articul);
          this.cartsettings.render();
          this.winecards.render(data);
        } else {
            const errorDiv: HTMLElement = new Component('div', 'cart__error').render();
            errorDiv.innerHTML = `
            <p class="error__message">Корзина заполнена, перейти в корзину?</p>
            <button class="error__btn cart__btn" >Ok</button>`
            document.body.append(errorDiv);
            document.querySelector('.overlay')!.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
      }
      if((<HTMLElement>event.target)!.classList.contains('error__btn')){
        if((<HTMLElement>event.target)!.classList.contains('cart__btn')){
        this.cartsettings.cartOpen();
        }
        const errorDiv = document.querySelector('.cart__error')!
        document.body.removeChild(errorDiv);
        document.body.style.overflow = 'auto';
        document.querySelector('.overlay')!.classList.remove('active')
      }
      if ((<HTMLElement>event.target)!.classList.contains('cart__remove')) {
        let articul = Number((<HTMLElement>event.target)!.dataset['articul']);
        if (this.cartsettings.totalItems > 0) {
          this.cartsettings.cartRemove(data, articul);
          this.cartsettings.render();
          this.winecards.render(data);
        }
      }
    })

    document
      .querySelector('.cart')!
      .addEventListener('click', event => {
        this.cartsettings.render();
        this.cartsettings.cartOpen();
        document.body.style.overflow = 'auto';
      })

    document
      .querySelector('.close-popup')!
      .addEventListener('click', event => {
        this.cartsettings.cartClose();
      })

    document.
      querySelector('.select')!.addEventListener('change', event => {
        if ((<HTMLOptionElement>event.target)!.value === 'ByPriceUp') {
          this.filterSettings.sortPriceUp(data);
          this.winecards.render(this.filterSettings.sorted);
        }
        if ((<HTMLOptionElement>event.target)!.value === 'ByPriceDown') {
          this.filterSettings.sortPriceDown(data);
          this.winecards.render(this.filterSettings.sorted);
        }
      })

    document
      .querySelector('.reset')!.addEventListener('click', event => {
        this.filterSettings.resetAll();
        event.preventDefault();
        this.winecards.render(data);
      })
  }
}

