import './winecards.css';
import { Wine } from '../../types/products'
import { LocalStorage, localStorageKeys } from '../../utils/localstorage';
import { goods } from '../../constats/goods'
import Component from '../../utils/component';
import Card from './card';

class WineCards extends Component {
  wineContainer: Component;
  data: Wine[];
  wineCard?: Card;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'winecards');
    this.wineContainer = new Component();
    this.data = LocalStorage.getLocalStorage(localStorageKeys.goods) ||
    LocalStorage.getLocalStorage(localStorageKeys.sorted) ||
    goods;
    this.renderCards();
  }

  renderCards() {
    this.data = LocalStorage.getLocalStorage(localStorageKeys.goods) ||
    LocalStorage.getLocalStorage(localStorageKeys.sorted) ||
    goods;
    this.wineContainer = new Component(this.node, 'div', 'winecards-container');
  
    this.data.forEach((item: Wine, idx: number) => {
      this.wineCard = new Card(this.wineContainer.node, item);
      this.wineCard.node.setAttribute('data-articul', `${idx}`)

    })
  }

  rerender() {
    this.wineContainer.destroy();
    this.renderCards();
  }
}

export default WineCards;