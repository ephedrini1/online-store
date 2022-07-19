import './cart.css'
import {  WineDetails } from '../../types/interfaces';
import { LocalStorage, localStorageKeys } from '../../utils/localstorage';
import WineCards from '../winecards/winecards'
export class CartSettings {
  cart: WineDetails[];
  totalItems: number;
  constructor() {
    this.cart = [];
    this.totalItems = this.totalItems = LocalStorage.getLocalStorage(localStorageKeys.totalItemsInCart) || 0;
  }

  cartAdd(data: WineDetails[], articul: number) {
         console.log(articul)
        if (localStorage.getItem('cart')) {
          this.cart = LocalStorage.getLocalStorage(localStorageKeys.cart) || '';
        };
        if (localStorage.getItem('goods')) {
          data = LocalStorage.getLocalStorage(localStorageKeys.goods) || data;
        };
      console.log(this.cart)
        console.log(articul);
        const index = this.cart.findIndex(elem => elem.id === articul);
        console.log(index);
        if(index === -1) {
          data[articul]['count']--;
          data[articul]['inCart']++;
          this.cart.push(data[articul]);
          this.totalItems++;
          console.log('data count ',data[articul]['count']);
          console.log('data inCart ' ,data[articul]['inCart']);
          console.log(this.cart)
        }else{
          this.totalItems++;
          this.cart[index]['inCart']++;
          data[articul]['count']--;
          data[articul]['inCart']++;
          this.cart[index]['count']--;
          console.log('cart Count ',this.cart[index]['count'])
          console.log('data count ',data[articul]['count'])
          console.log('cart inCart ',this.cart[index]['inCart'])
          console.log('data inCart ',data[articul]['inCart'])
        } 
        if(data[articul]['count'] === 0) {
          const winecards = new WineCards();
          winecards.render(data);
        }
        LocalStorage.setLocalStorage(localStorageKeys.cart, this.cart)
        LocalStorage.setLocalStorage(localStorageKeys.goods, data)
        LocalStorage.setLocalStorage(localStorageKeys.totalItemsInCart, this.totalItems)
      }
      cartRemove(data: WineDetails[], articul: number) {
        if (localStorage.getItem('cart')) {
          this.cart = LocalStorage.getLocalStorage(localStorageKeys.cart) || '';
        };
        if (localStorage.getItem('goods')) {
          data = LocalStorage.getLocalStorage(localStorageKeys.goods) || data;
        };
        console.log(articul);
        const index = this.cart.findIndex(elem => elem.id === articul);
        if(index >= 0) {
          this.totalItems--;
          this.cart[index]['inCart']--;
          data[articul]['count']++;
          data[articul]['inCart']--;
          this.cart[index]['count']++;
          console.log('cart Count ',this.cart[index]['count'])
          console.log('data count ',data[articul]['count'])
          console.log('cart inCart ',this.cart[index]['inCart'])
          console.log('data inCart ',data[articul]['inCart'])
        
        } 
        LocalStorage.setLocalStorage(localStorageKeys.cart, this.cart)
        LocalStorage.setLocalStorage(localStorageKeys.goods, data)
        LocalStorage.setLocalStorage(localStorageKeys.totalItemsInCart, this.totalItems)
      
      }

      render() {
        this.cart = LocalStorage.getLocalStorage(localStorageKeys.cart) || [];
        const fragment = document.createDocumentFragment();
        const cartItemsTemp = document.querySelector('#cartItemsTemp') as HTMLTemplateElement;
        const badge = document.querySelector('.cart__products');
        const popup = document.querySelector('.cart-popup');
        let totalSum = 0;
        this.cart.forEach(item => {
          const cartItem = cartItemsTemp.content.cloneNode(true) as HTMLElement;
          (cartItem.querySelector('.cart-item__name'))!.textContent = item.name;
          (cartItem.querySelector('.cart__input'))!.textContent = item.inCart.toString();
          const itemsPrice = +item.price * item.inCart;
          totalSum += itemsPrice;
          (cartItem.querySelector('.cart-item__price'))!.textContent = `${itemsPrice}`;
          (cartItem.querySelector('.cart__add'))!.setAttribute('data-articul', `${item.id}`);
            if(item.count === 0) {
              (cartItem.querySelector('.cart__add') as HTMLElement)!.style.pointerEvents = 'none';
              (cartItem.querySelector('.cart__add') as HTMLElement)!.style.opacity = '0.5';
            }
          (cartItem.querySelector('.cart__remove'))!.setAttribute('data-articul', `${item.id}`);

            if(item.inCart === 0) {
              (cartItem.querySelector('.cart__remove') as HTMLElement)!.style.pointerEvents = 'none';
              (cartItem.querySelector('.cart__remove') as HTMLElement)!.style.opacity = '0.5';
            }
          document.querySelector('.cart__total')!.textContent = `${totalSum}`
        
          fragment.append(cartItem);
        })  
        document.querySelector('.cart__products')!.textContent = `${this.totalItems}`
  
        document.querySelector('.cart-popup__container')!.innerHTML = '';
        document.querySelector('.cart-popup__container')!.appendChild(fragment);
      }
      cartOpen() {
        document.querySelector('.cart-popup')!.classList.add('active');
        document.querySelector('.overlay')!.classList.add('active');
      }
      cartClose() {
        document.querySelector('.cart-popup')!.classList.remove('active');
        document.querySelector('.overlay')!.classList.remove('active');
      }
    }
  





