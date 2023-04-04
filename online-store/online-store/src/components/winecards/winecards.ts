import './winecards.css';
import { Wine } from '../../types/products';
import { LocalStorage, localStorageKeys } from '../../utils/localstorage';
import { goods } from '../../constants/goods';
import Component from '../../utils/component';
import Card from './card';

class WineCards extends Component {
    wineContainer: Component;
    data: Wine[];
    wineCard?: Card;
    constructor(parentNode?: HTMLElement) {
        super(parentNode, 'div', 'winecards');
        this.wineContainer = new Component();
        this.data = LocalStorage.getLocalStorage(localStorageKeys.onPage) ||
    goods;
        this.renderCards();
    }

    renderCards(data?: Wine[]) {
        this.data = data || LocalStorage.getLocalStorage(localStorageKeys.onPage) || goods;
        this.wineContainer = new Component(this.node, 'div', 'winecards-container');
  
        this.data.forEach((item: Wine, idx: number) => {
            this.wineCard = new Card(this.wineContainer.node, item);
            this.wineCard.node.setAttribute('data-articul', `${idx}`);
        });
    }

    rerender(data? : Wine[]) {
        this.wineContainer.destroy();
        this.renderCards(data);
    }
}

export default WineCards;