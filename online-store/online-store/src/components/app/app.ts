import { WineDetails } from "../../types/interfaces";
import { CartSettings } from "../cart/cart";
import WineCards from "../winecards/winecards";
import Header from "../../html-components/header/header";
import Main from "../../html-components/main/main";
import FilterSettings from "../filters/filterSettings";
import Filters from "../../html-components/filters/filters";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
import { goods } from "../../constats/goods";

export default class App {
  private static container: HTMLElement = document.body;
  private header: Header;
  private main: Main;
  cartsettings: CartSettings;
  winecards: WineCards;
  filterSettings: FilterSettings;
  constructor() {
  
    this.cartsettings = new CartSettings();
    this.winecards = new WineCards();
    this.filterSettings = new FilterSettings();
    this.header = new Header('header', 'header');
    this.main = new Main('main', 'main');

  }
  start(data: WineDetails[]) {
    if (localStorage.getItem('sorted')) {
      data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
    };
    App.container.append(this.header.render());
    App.container.append(this.main.render());
    this.winecards.render(data);
    this.cartsettings.render();
    const colorFilters = document.querySelector('.color-filter')
    const countryFilters = document.querySelector('.country-filter')
    const filters = document.querySelector('#filters');
    colorFilters!.addEventListener('input', event => {
        this.filterSettings.filterByColor(data);
        this.winecards.render(this.filterSettings.filtered);
   
      })
      countryFilters!.addEventListener('input', event => {
          this.filterSettings.filterByCountry(data);
          this.winecards.render(this.filterSettings.filtered);
   
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
          if (this.cartsettings.totalItems < 20 ) {
            this.cartsettings.cartAdd(data, articul);
            this.cartsettings.render();
            this.winecards.render(data);
          }else{
            document.querySelector('.cart__error')!.classList.add('active');
            document.querySelector('.overlay')!.classList.add('active');
            document.body.style.overflow = 'hidden';

          }
        }
      })
      document.addEventListener('click', event => {
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
      .querySelector('.error__btn')!
      .addEventListener('click', event => {
        this.cartsettings.cartOpen();
        document.querySelector('.cart__error')!.classList.remove('active');
            document.body.style.overflow = 'auto';
      })
      document
      .querySelector('.cart')!
      .addEventListener('click', event => {
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
        if((<HTMLOptionElement>event.target)!.value === 'ByPriceUp'){
          this.filterSettings.sortPriceUp(data);
          this.winecards.render(this.filterSettings.sorted)
        }
          if((<HTMLOptionElement>event.target)!.value === 'ByPriceDown'){
          this.filterSettings.sortPriceDown(data);
          this.winecards.render(this.filterSettings.sorted)
        }
      })

      document
      .querySelector('.reset')!.addEventListener('click', event => {
        this.filterSettings.resetAll();
        this.winecards.render(data);
      })
  }
}

