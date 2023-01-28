import './header.css';
import Component from '../../utils/component';
import Search from '../search/search';
import { Cart } from '../cart/cart';

export default class Header extends Component {
  cart: Cart;
  search: Search;
   constructor(parentNode: HTMLElement) {
     super(parentNode, 'header', 'header');
     this.search = new Search(this.node)
     this.cart = new Cart(this.node,);
 }
 
}