import './filters.css'
import { Wine } from "../../types/products";
import Component from "../../utils/component";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
import { goods } from "../../constats/goods";

export class Filters extends Component {
  form: HTMLFormElement;
  filtersContainer: Component;
  countryFilter: Component;
  colorFilter: Component;
  data: Wine[];

  constructor (parentNode: HTMLElement) {
    super(parentNode, 'form', 'filters-form')
    this.form = this.node as HTMLFormElement;
    this.form.action = '#';
    this.filtersContainer = new Component(this.node, 'div', 'filters-container');
    this.data = LocalStorage.getLocalStorage(localStorageKeys.goods) ||
    LocalStorage.getLocalStorage(localStorageKeys.sorted) ||
    goods;
    this.countryFilter = new Component(this.filtersContainer.node, 'div', 'country-filter');
    this.colorFilter = new Component(this.filtersContainer.node, 'div', 'color-filter');
    this.render();
  }

  render() {
    let countryList: String[] = [];
    let colorList: String[] = [];
    goods.forEach((item) => {
      if(!countryList.includes(item.country)) {
        countryList.push(item.country)
      }
    })
    goods.forEach((item) => {
      if(!colorList.includes(item.color)) {
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
  }
}