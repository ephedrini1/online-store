import Component from '../../utils/component';
import SearchInput from '../search/search';
import Cart from '../cart/cart'
import CartPopup from '../cart-popup/cart-popup';

export default class Header extends Component {
  private className: string;
  private search: Component;
  private cart: Component;
  private cartPopup: Component;
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.className = className;
    this.search = new Component('div','header__search search-container','search-input');
    this.cart = new Component('div', 'header__cart cart', 'cart');
    this.cartPopup = new Component('div', 'cart-popup', 'cart-popup');
  }
    renderSearch() {
      const searchDiv: HTMLElement = this.search.render();
      searchDiv.innerHTML = SearchInput.searchForm;
      this.container.append(searchDiv);
    }

    renderCart() {
      const cartDiv: HTMLElement = this.cart.render();
      cartDiv.innerHTML = Cart.cart;
      this.container.append(cartDiv);
    }

    renderCartPopup() {
      const cartPopupDiv: HTMLElement = this.cartPopup.render();
      cartPopupDiv.innerHTML = CartPopup.cartPopup;
      this.container.append(cartPopupDiv);
    }

  render() {
    this.renderSearch();
     this.renderCart();
     this.renderCartPopup();
    return this.container;
  }
}