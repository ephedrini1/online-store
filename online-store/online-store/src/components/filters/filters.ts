import "./filters.css";
import Component from "../../utils/component";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
import { goods } from "../../constants/goods";
import FilterSettings from "./filterSettings";

function getCountryList() {
  const countryList: string[] = [];
  goods.forEach((item) => {
    if (!countryList.includes(item.country)) {
      countryList.push(item.country);
    }
  });
  return countryList;
}

function getColorList() {
  const colorList: string[] = [];
  goods.forEach((item) => {
    if (!colorList.includes(item.color)) {
      colorList.push(item.color);
    }
  });
  return colorList;
}

export class Filters extends Component {
  form: HTMLFormElement;
  filtersContainer: Component;
  countryFilter: Component;
  colorFilter: Component;
  sortContainer: Component;
  filtersBtns: Component;
  resetFilters: Component;
  clearHistory: Component;
  sort: Component;
  sortTitle: Component;
  select: Component;
  settings: FilterSettings;

  constructor(parentNode?: HTMLElement) {
    super(parentNode, "form", "filters-form");
    this.form = this.node as HTMLFormElement;
    this.settings = new FilterSettings();
    this.form.action = "#";
    this.filtersContainer = new Component(
      this.node,
      "div",
      "filters-container"
    );
    this.countryFilter = new Component(
      this.filtersContainer.node,
      "div",
      "country-filters"
    );
    this.colorFilter = new Component(
      this.filtersContainer.node,
      "div",
      "color-filters"
    );
    this.sortContainer = new Component(this.node, "div", "sort-container");
    this.sort = new Component(this.sortContainer.node, "div", "sort");
    this.sortTitle = new Component(
      this.sort.node,
      "filter-name",
      "sort",
      "Сортировка"
    );
    this.select = new Component(this.sort.node, "select", "select");
    this.filtersBtns = new Component(this.node, "div", "btns-panel");
    this.resetFilters = new Component(
      this.filtersBtns.node,
      "button",
      "reset-filters btn",
      "Сбросить фильтры"
    );
    this.clearHistory = new Component(
      this.filtersBtns.node,
      "button",
      "reset-filters reset btn",
      "Очистить историю"
    );
  }

  render() {
    const filters = LocalStorage.getLocalStorage(localStorageKeys.filters);
    const countryList = getCountryList();
    const colorList = getColorList();

    const countryTitle = new Component(
      this.countryFilter.node,
      "h4",
      "filter-name",
      "Страна"
    );
    const countryDiv = new Component(
      this.countryFilter.node,
      "div",
      "country-filter"
    );
    countryList.forEach((item, index) => {
      const checkBoxDiv = new Component(countryDiv.node, "div", "checkbox");
      checkBoxDiv.node.innerHTML = `<div class="checkboxDiv id="country">
                  <input type="checkbox" class="country" id="check${index}" name="country" value="${item}">
                  <label class="checkbox-country"for="check${index}">${item}</label>
               </div>`;
      if (filters && filters.country.includes(item)) {
        const cb = checkBoxDiv.node.querySelector('input[type="checkbox"]');
        (cb as HTMLInputElement).checked = true;
      }
    });
    const colorTitle = new Component(
      this.colorFilter.node,
      "h4",
      "filter-name",
      "Цвет"
    );
    const colorDiv = new Component(
      this.colorFilter.node,
      "div",
      "color-filter"
    );
    colorList.forEach((item, index) => {
      const checkBoxDiv = new Component(colorDiv.node, "div", "checkbox");
      checkBoxDiv.node.innerHTML = `<div class="checkboxDiv">
                  <input type="checkbox" class="color" id="check${
                    index + countryList.length
                  }" name="color" value="${item}">
                  <label class="checkbox-country"for="check${
                    index + countryList.length
                  }">${item}</label>
               </div>`;
      if (filters && filters.color.includes(item)) {
        const cb = checkBoxDiv.node.querySelector('input[type="checkbox"]');
        (cb as HTMLInputElement).checked = true;
      }
    });

    this.select.node.innerHTML = `<option value=""></option>
             <option value="ByPriceUp">По цене: по возрастанию</option>
             <option value="ByPriceDown">По цене: по убыванию</option>
           </div>`;
  }
}
