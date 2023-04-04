import './search.css';
import { Wine } from "../../types/products";
import Component from "../../utils/component";
import WineCards from "../winecards/winecards";
import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
import { goods } from "../../constants/goods";

export default class Search extends Component {
    searchData: Wine[];
    searchInput: HTMLInputElement;
    input: Component;
    winecards: WineCards;
    searchPopup: Component;
    searchPopupContainer: Component;
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', 'search-container');
        this.input = new Component(this.node, 'input', 'search-container__input');
        this.searchInput = this.input.node as HTMLInputElement;
        this.searchInput.autocomplete = 'off';
        this.searchInput.placeholder = 'Поиск...';
        this.searchInput.type = 'search';
        this.searchInput.focus();
        this.searchData = LocalStorage.getLocalStorage(localStorageKeys.goods) ||goods;
        this.winecards = new WineCards();
        this.searchPopup = new Component();
        this.searchPopupContainer = new Component(this.searchPopup.node, 'div', 'search-popup__container');
    }

    search(data: Wine[]) {
        let value = this.searchInput.value.trim();
        value = value.toLowerCase();
        this.searchData = [];
        if (value != '') {
            data.forEach((item) => {
                if (item.name.toLowerCase().startsWith(value)) {
                    this.searchData.push(item);
                }
            });
      
            if (this.searchData.length === 0) {
                this.searchInput.readOnly = true;
                this.searchPopupContainer = new Component(document.body, 'div', 'cart__error');
                this.searchPopupContainer.node.innerHTML = `
        <p class="error__message">По данному запросу ничего не найдено</p>
        <button class="error__btn search__btn" >Ok</button>`;
      document.querySelector('.overlay')!.classList.add('active');
      document.body.style.overflow = 'hidden';
            }
        } else {
            this.searchData = data;
        }
    }

    popupClose() {
        this.searchPopupContainer.destroy();
    document.querySelector('.overlay')!.classList.remove('active');
    document.body.style.overflow = 'scroll';
    this.searchInput.readOnly = false;
    this.searchInput.value = '';
    }
}
