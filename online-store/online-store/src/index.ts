import './global.css';
// import WineCards from './components/winecards/winecards';
// import './components/cart/cart';
 import {goods} from './constats/goods';
// const winecards = new WineCards();
// winecards.render(goods);
// import { CartSettings } from './components/cart/cart';
// import { LocalStorage, localStorageKeys } from './utils/localstorage';
// const cartsettings = new CartSettings();
// cartsettings.addToCart(goods);

import App from './components/app/app';
import './global.css';

const app = new App();
app.start(goods);