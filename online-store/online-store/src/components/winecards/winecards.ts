import './winecards.css';
import { Wine, WineDetails } from '../../types/interfaces'
import { LocalStorage, localStorageKeys } from '../../utils/localstorage';

class WineCards {
  render(data: WineDetails[]) {
    if (localStorage.getItem('goods')) {
      data = LocalStorage.getLocalStorage(localStorageKeys.goods) || data;
    };
    if (localStorage.getItem('sorted')) {
      data = LocalStorage.getLocalStorage(localStorageKeys.sorted) || data;
    };
    const wines = data;
    const fragment = document.createDocumentFragment();
    const wineCardTemp = document.querySelector('#winecardsItemTemp') as HTMLTemplateElement;
    wines.forEach((item : WineDetails, idx : number) => {
      const wineCard = wineCardTemp.content.cloneNode(true) as HTMLElement;

      (wineCard.querySelector('.winecards__face-photo') as HTMLElement)!.style.backgroundImage = `url(${item.image})`;
      (wineCard.querySelector('.winecards__face-name'))!.textContent = item.name;
      (wineCard.querySelector('.winecards__face-count'))!.textContent = `В наличии : ${item.count}`;
      (wineCard.querySelector('.winecards__face-price'))!.textContent = `${item.price} BYN`;
      (wineCard.querySelector('.winecards__back-name'))!.textContent = item.name;
      (wineCard.querySelector('.winecards__back-madeBy'))!.textContent = `Производитель : ${item.madeBy}`;
      (wineCard.querySelector('.winecards__back-country'))!.textContent = `Страна : ${item.country}`;
      (wineCard.querySelector('.winecards__back-year'))!.textContent = `Год : ${item.year}`;
      (wineCard.querySelector('.winecards__back-color'))!.textContent = `Цвет : ${item.color}`;
      (wineCard.querySelector('.winecards__back-alcohol'))!.textContent = `Крепость : ${item.alcohol}%`;
      (wineCard.querySelector('.winecards__back-vol'))!.textContent = `Объем : ${item.vol}л`;


      if (!item.inStock || item.count === 0) {
        (wineCard.querySelector('.winecards__item') as HTMLElement)!.style.pointerEvents = 'none';
        (wineCard.querySelector('.winecards__item') as HTMLElement)!.style.opacity = '0.5';
        (wineCard.querySelector('.winecards__face-count'))!.textContent = 'Нет в наличии';
        (wineCard.querySelector('.winecards__face-price'))!.textContent = '';
      }

      if(item.inCart > 0) {
        (wineCard.querySelector('.winecards__item') as HTMLElement)!.classList.add('inCart');
      }
      else{
        (wineCard.querySelector('.winecards__item') as HTMLElement)!.classList.remove('inCart');

      }
      (wineCard.querySelector('.cart__add'))!.setAttribute('data-articul', `${idx}`)
      fragment.append(wineCard);
    });

    (document.querySelector('.winecards-container'))!.innerHTML = '';
    (document.querySelector('.winecards-container'))!.appendChild(fragment);
  }
}

export default WineCards;