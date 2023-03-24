import { Wine } from "../../types/products";
import Component from "../../utils/component";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
import { goods } from "../../constats/goods";

export class Filters extends Component {
  form: HTMLFormElement;
  filtersContainer: Component;
  data: Wine[];

  constructor (parentNode: HTMLElement) {
    super(parentNode, 'form', 'filters-form')
    this.form = this.node as HTMLFormElement;
    this.form.action = '#';
    this.filtersContainer = new Component(this.node, 'div', 'filters-container');
    this.data = LocalStorage.getLocalStorage(localStorageKeys.goods) ||
    LocalStorage.getLocalStorage(localStorageKeys.sorted) ||
    goods;
    
  }
}