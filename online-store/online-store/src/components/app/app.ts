import { WineDetails } from "../../types/interfaces";
import { CartSettings } from "../cart/cart";
import WineCards from "../winecards/winecards";
import Header from "../../html-components/header/header";
import Main from "../../html-components/main/main";
import FilterSettings from "../filters/filterSettings";
import Filters from "../../html-components/filters/filters";

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
    App.container.append(this.header.render());
    App.container.append(this.main.render());
    this.winecards.render(data);
    this.cartsettings.render();
    const colorFilters = document.querySelector('.color-filter')
    const countryFilters = document.querySelector('.country-filter')
    const filters = document.querySelector('#filters');
    colorFilters!.addEventListener('input', event => {
      if(this.filterSettings.filterArr.length === 0 ){
        this.filterSettings.filterByColor(data);
        this.winecards.render(this.filterSettings.filtered);
      }
      else{
        this.filterSettings.filterByColor(this.filterSettings.filterArr);
        this.winecards.render(this.filterSettings.filtered);
      }
      })
      countryFilters!.addEventListener('input', event => {
        if(this.filterSettings.filterArr.length === 0 ){
          this.filterSettings.filterByCountry(data);
          this.winecards.render(this.filterSettings.filtered);
        }
        else{
          this.filterSettings.filterByCountry(this.filterSettings.filterArr);
          this.winecards.render(this.filterSettings.filtered);
        }
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
          let articul = Number((<HTMLElement>event.target)!.dataset['articul']);
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
  }
}

