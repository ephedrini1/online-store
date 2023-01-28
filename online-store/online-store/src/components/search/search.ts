 import { Wine } from "../../types/products";
import Component from "../../utils/component";
 import WineCards from "../winecards/winecards";
 import { LocalStorage, localStorageKeys } from "../../utils/localstorage";
 import { goods } from "../../constats/goods";

 export default class Search extends Component{
   searchData: Wine[];
   searchInput: HTMLInputElement;
   input: Component;
   winecards : WineCards;
   constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'search-container');
     this.input = new Component(this.node, 'input', 'search-container__input');
     this.searchInput = this.input.node as HTMLInputElement;
     this.searchInput.autocomplete = 'off';
     this.searchInput.placeholder = 'Поиск...';
     this.searchInput.type = 'search';
     this.searchInput.autofocus = true;
     this.searchData = LocalStorage.getLocalStorage(localStorageKeys.goods) ||
     LocalStorage.getLocalStorage(localStorageKeys.sorted) ||
     goods;
     this.searchInput.onchange = () => this.search(this.searchData)
     this.winecards = new WineCards();
   }

   search(data: Wine[]) {
     let value = this.searchInput.value;
     value = value.trim().toLowerCase();
     console.log(value)
     this.searchData = data;
    data.forEach((item, index) => {
        if(item.name.toLowerCase().search(value) == -1){
          this.searchData.splice(index, 1)
        }
    })

     console.log(this.searchData)

    if (this.searchData.length === 0) {
      const errorDiv = new Component(document.body, 'div', 'cart__error');
      errorDiv.node.innerHTML = `
        <p class="error__message">По данному запросу ничего не найдено</p>
        <button class="error__btn search__btn" >Ok</button>`
      document.querySelector('.overlay')!.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

  }
 }
