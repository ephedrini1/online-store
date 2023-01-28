import Component from "../utils/component";
import Header from "./header/header";
import WineCards from "./winecards/winecards";
import { Wine } from "../types/products";
import { goods } from "../constats/goods";
import Footer from "./footer/footer";

export default class Page extends Component {
  header: Header;
  winecards: WineCards;
  totalItems: number;
  footer: Footer;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div');
    this.header = new Header(this.node);
    this.winecards = new WineCards(this.node);
    this.setEventListener();
    this.totalItems = this.header.cart.cartList.reduce((acc: number, el: Wine) => acc + el.inCart, 0) || 0;
    this.footer = new Footer(this.node);
  }

  setEventListener() {
    let articul: number;
    document.addEventListener('click', event => {
      if (event) {
        if ((<HTMLElement>event.target).classList.contains('cart__add')) {
          articul = Number((<HTMLElement>event.target)!.dataset['articul'])!;
          this.header.cart.cartAdd(articul);
          this.winecards.rerender();
          this.header.cart.render();
          if (this.totalItems < 20) {
            this.totalItems += 1;
            this.header.cart.totalLabel.node.textContent = `${this.totalItems}`
          }
        }
        if ((<HTMLElement>event.target).classList.contains('cart__remove')) {
          articul = Number((<HTMLElement>event.target)!.dataset['articul'])!;
          this.header.cart.cartRemove(articul);
          this.winecards.rerender();
          this.header.cart.render();
          if (this.totalItems > 0) {
            this.totalItems -= 1;
            this.header.cart.totalLabel.node.textContent = `${this.totalItems}`
          }
        }
        if ((<HTMLElement>event.target).classList.contains('close-popup')) {
          this.header.cart.cartClose();
        }
         if ((<HTMLElement>event.target).classList.contains('error__btn')) {
          this.header.search.popupClose();
          this.winecards.rerender();
        }
      }
      this.header.cart.node.onclick = () => {
        this.header.cart.cartOpen();
      }
    })
    this.header.search.searchInput.addEventListener('input', event => {
      this.header.search.search(goods);
      console.log(this.header.search.searchData)
      this.winecards.rerender(this.header.search.searchData)
    })
  }
}
