import './cart.css'
import { Wine } from '../../types/products';
import { LocalStorage, localStorageKeys } from '../../utils/localstorage';
import Component from '../../utils/component';
import { goods } from '../../constats/goods';

export class Cart extends Component {
  cartList: Wine[];
  data: Wine[];
  totalItems: number;
  totalLabel: Component;
  total: Component;
  notification: Component;
  cartPopup: Component;
  cartPopupContainer: Component;
  constructor(parentNode: HTMLElement) {

    super(parentNode, 'div', 'header__cart cart');
    this.notification = new Component(this.node, 'a', 'cart__notification');
    this.cartList = LocalStorage.getLocalStorage(localStorageKeys.cart) || [];
    this.totalItems = this.cartList.reduce((acc: number, el: Wine) => acc + el.inCart, 0) || 0;
    this.data = LocalStorage.getLocalStorage(localStorageKeys.goods) || goods;
    this.totalLabel = new Component(this.node, 'span', 'cart__products', `${this.totalItems}`)
    this.cartPopup= new Component(document.body, 'div', 'cart-popup');
    this.cartPopupContainer = new Component(this.cartPopup.node, 'div', 'cart-popup__container');
    this.total = new Component(this.cartPopup.node, 'p', 'cart__total');

  }

  cartAdd(articul: number) {
    const index = this.cartList.findIndex(elem => elem.id === articul);
  
    if(index === -1) {
      this.cartList.push(this.data[articul]);
      this.data[articul]['inCart']++;
      this.data[articul]['count']--;
    }else{
      this.data[articul]['inCart']++;
      this.data[articul]['count']--;
      this.cartList[index]['inCart']++;
      this.cartList[index]['count']--;
    }
    LocalStorage.setLocalStorage(localStorageKeys.cart, this.cartList)
    LocalStorage.setLocalStorage(localStorageKeys.goods, this.data)
  }

        cartRemove(articul: number) {
          this.cartList = LocalStorage.getLocalStorage(localStorageKeys.cart) || [];
          this.data = LocalStorage.getLocalStorage(localStorageKeys.goods) || goods;
          const index = this.cartList.findIndex(elem => elem.id === articul);
          if(index >= 0 && this.cartList[index]['inCart'] > 0) {
            this.cartList[index]['inCart']--;
            this.data[articul]['count']++;
            this.data[articul]['inCart']--;
            this.cartList[index]['count']++;
          } 
          LocalStorage.setLocalStorage(localStorageKeys.cart, this.cartList)
          LocalStorage.setLocalStorage(localStorageKeys.goods, this.data)
         }

  render() {
     this.cartList = LocalStorage.getLocalStorage(localStorageKeys.cart) || [];
     let totalSum = 0;
     this.cartPopupContainer.node.innerHTML = '';
     this.total.node.innerHTML = '';
     const closePopup = new Component(this.cartPopup.node, 'span', 'close-popup', 'X');

     if(this.cartList.length === 0) this.cartPopupContainer.node.textContent = 'Корзина пуста'
     
     this.cartList.forEach(item => {
       const cartItem = new Component(this.cartPopupContainer.node, 'div', 'cart-item');
       cartItem.node.setAttribute('id', `${item.id}`);
       const cartItemName = new Component(cartItem.node, 'p', 'cart-item__name', `${item.name}`);
       const cartNumber = new Component(cartItem.node, 'div', 'cart__number');
       const removeBtn = new Component(cartNumber.node, 'button', 'cart__remove cart__btn', '-');
       removeBtn.node.setAttribute('data-articul', `${item.id}`);
       const cartInput = new Component(cartNumber.node, 'p', 'cart__input', `${item.inCart.toString()}`);
       const addBtn = new Component(cartNumber.node, 'button', 'cart__add cart__btn', '+');
       addBtn.node.setAttribute('data-articul', `${item.id}`);
       const itemsPrice = +item.price * item.inCart;
       totalSum += itemsPrice;
       this.total.node.textContent = `${totalSum}`
       const cartItemPrice = new Component(cartItem.node, 'p', 'cart-item__price', `${itemsPrice}`);
     
        if(item.count === 0) {
          addBtn.node.style.pointerEvents = 'none';
          addBtn.node.style.opacity = '0.5';
        }

        if(item.inCart === 0) {
          removeBtn.node.style.pointerEvents = 'none';
          removeBtn.node.style.opacity = '0.5';
          this.cartList = this.cartList.filter(el => el.inCart !== 0);
          LocalStorage.setLocalStorage(localStorageKeys.cart, this.cartList)
          
        }
     })  
   }

        cartOpen() {
          this.cartPopup.node.classList.add('active');
          this.render();
        }

        cartClose() {
          this.cartPopup.node.classList.remove('active');
        }
}






