import './winecards.css';
import { Wine } from '../../types/products'
import { LocalStorage, localStorageKeys } from '../../utils/localstorage';
import {goods} from '../../constats/goods'
import Component from '../../utils/component';

class WineCards {
  wineContainer: Component; 
  constructor() {
    this.wineContainer = new Component(document.body, 'div', 'container');
  }

  render() {
    let wines: Wine[] = [];
    if (localStorage.getItem('goods')) {
      wines = LocalStorage.getLocalStorage(localStorageKeys.goods) || goods;
    };
    if (localStorage.getItem('sorted')) {
      wines = LocalStorage.getLocalStorage(localStorageKeys.sorted) || goods;
    };
    
    wines.forEach((item : Wine, idx : number) => {
      const wineCard = new Component(this.wineContainer.node, 'div', 'winecards__item');
      
      if (wineCard) {
        const wineCardFace = new Component(wineCard.node, 'div', 'winecards-face');
        const wineCardFaceDetails = new Component(wineCardFace.node, 'div', 'winecards-face__details');
        const wineCardFaceName = new Component(wineCardFaceDetails.node, 'h2', 'winecards-face__name', `${item.name}`);
        const wineCardFacePhoto = new Component(wineCardFaceDetails.node, 'div', 'winecards-face__photo');
        wineCardFacePhoto.node.style.backgroundImage = `url(${item.image})`;
        const wineCardFaceCount = new Component(wineCardFaceDetails.node, 'h3', 'winecards-face__count', `В наличии : ${item.count}`);
        const wineCardFacePrice = new Component(wineCardFaceDetails.node, 'h3', 'winecards-face__price',`${item.price} BYN`);
        const wineCardBack = new Component(wineCard.node, 'div', 'winecards-back');
        const wineCardBackDetails = new Component(wineCardBack.node, 'div', 'winecards-back__details');
        const wineCardBackName = new Component(wineCardBackDetails.node, 'h2', 'winecards-back__name', `${item.name}`);
        const wineCardBackMadeBy = new Component(wineCardBackDetails.node, 'p','winecards-back__madeBy',`Производитель : ${item.madeBy}`);
        const wineCardBackCountry = new Component(wineCardBackDetails.node, 'p','winecards-back__country', `Страна : ${item.country}`);
        const wineCardBackYear = new Component(wineCardBackDetails.node, 'p','winecards-back__year', `Год : ${item.year}`);
        const wineCardBackColor = new Component(wineCardBackDetails.node, 'p','winecards-back__color', `Цвет : ${item.color}`);
        const wineCardBackAlcohol = new Component(wineCardBackDetails.node, 'p','winecards-back__alcohol', `Крепость : ${item.alcohol}%`);
        const wineCardBackVol = new Component(wineCardBackDetails.node, 'p','.winecards-back__vol', `Объем : ${item.vol}л`);
      }

      if (!item.inStock || item.count === 0) {
        wineCard.node.style.pointerEvents = 'none';
        wineCard.node.style.opacity = '0.5';
        wineCard.node.textContent = 'Нет в наличии';
        wineCard.node.textContent = '';
      }

      if(item.inCart > 0) {
        wineCard.node.classList.add('inCart');
      }
      else{
        wineCard.node.classList.remove('inCart');

      }
      wineCard.node.setAttribute('data-articul', `${idx}`)
    });
  }

  rerender() {
    this.wineContainer.destroy();
    this.render();
  }
}

export default WineCards;