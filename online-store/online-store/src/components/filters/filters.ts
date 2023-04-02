import './filters.css'
import { Wine } from "../../types/products";
import Component from "../../utils/component";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
import { goods } from "../../constats/goods";
import WineCards from '../winecards/winecards';

export class Filters extends Component {
  form: HTMLFormElement;
  filtersContainer: Component;
  countryFilter: Component;
  colorFilter: Component;
  data: Wine[];
  sortContainer: Component;
  resetFilters: Component;
  clearHistory: Component;
  sort: Component;
  sortTitle: Component;
  select: Component;
  sorted: Wine[];
  winecards: WineCards;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'form', 'filters-form')
    this.form = this.node as HTMLFormElement;
    this.form.action = '#';
    this.filtersContainer = new Component(this.node, 'div', 'filters-container');
    this.data = LocalStorage.getLocalStorage(localStorageKeys.goods) ||
      LocalStorage.getLocalStorage(localStorageKeys.sorted) ||
      goods;
    this.sorted = LocalStorage.getLocalStorage(localStorageKeys.sorted) || goods;
    this.countryFilter = new Component(this.filtersContainer.node, 'div', 'country-filter');
    this.colorFilter = new Component(this.filtersContainer.node, 'div', 'color-filter');
    this.sortContainer = new Component(this.filtersContainer.node, 'div', 'sort-container')
    this.sort = new Component(this.sortContainer.node, 'div', 'sort');
    this.sortTitle = new Component(this.sort.node, 'filter-name', 'sort', 'Сортировка');
    this.select = new Component(this.sort.node, 'select', 'select')
    this.render();
    this.resetFilters = new Component(this.filtersContainer.node, 'button', 'reset-filters btn', 'Сбрость фильтры')
    this.clearHistory = new Component(this.filtersContainer.node, 'button', 'reset-filters reset btn', 'Очистить историю')
    this.winecards = new WineCards()
  }

  render() {
    let countryList: String[] = [];
    let colorList: String[] = [];
    goods.forEach((item) => {
      if (!countryList.includes(item.country)) {
        countryList.push(item.country)
      }
    })
    goods.forEach((item) => {
      if (!colorList.includes(item.color)) {
        colorList.push(item.color)
      }
    })
    const countryTitle = new Component(this.countryFilter.node, 'h4', 'filter-name', 'Страна')
    const countryDiv = new Component(this.countryFilter.node, 'div', 'country-filter');
    countryList.forEach((item, index) => {
      const checkBoxDiv = new Component(countryDiv.node, 'div', 'checkbox');
      checkBoxDiv.node.innerHTML = `<div class="checkbox">
                  <input type="checkbox" id="check${index}" name="country" value="${item}">
                  <label class="checkbox-country"for="check${index}">${item}</label>
               </div>`
    })
    const colorTitle = new Component(this.colorFilter.node, 'h4', 'filter-name', 'Цвет');
    const colorDiv = new Component(this.colorFilter.node, 'div', 'color-filter');
    colorList.forEach((item, index) => {
      const checkBoxDiv = new Component(colorDiv.node, 'div', 'checkbox');
      checkBoxDiv.node.innerHTML = `<div class="checkbox">
                  <input type="checkbox" id="check${index + countryList.length}" name="country" value="${item}">
                  <label class="checkbox-country"for="check${index + countryList.length}">${item}</label>
               </div>`
    })

    this.select.node.innerHTML =
      `<option value=""></option>
             <option value="ByPriceUp">По цене: по возрастанию</option>
             <option value="ByPriceDown">По цене: по убыванию</option>
           </div>`
  }

  sortPriceUp(data: Wine[]) {
    this.sorted = LocalStorage.getLocalStorage(localStorageKeys.sorted) || goods;
    this.sorted = data.sort((a, b) => {
      return +a.price - +b.price;
    })
    console.log(this.sorted);
    LocalStorage.setLocalStorage(localStorageKeys.sorted, this.sorted);
  }

  sortPriceDown() {
    this.sorted = LocalStorage.getLocalStorage(localStorageKeys.sorted) || goods;
    this.sorted = this.data.sort((a, b) => {
      return +b.price - +a.price;
    })
    console.log(this.sorted);
    LocalStorage.setLocalStorage(localStorageKeys.sorted, this.sorted);
  }

  resetAll() {
    localStorage.clear();
  }

}