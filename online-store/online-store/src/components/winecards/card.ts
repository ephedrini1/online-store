import Component from '../../utils/component';
import { Wine } from '../../types/products';
import ToCartBtn from './winecard-btn';

export default class Card extends Component {
  static wineCardFace: Component;
  static wineCardFaceDetails: Component;
  static wineCardFaceName: Component;
  static wineCardFacePhoto: Component;
  static wineCardFaceCount: Component;
  static wineCardFacePrice: Component;
  static wineCardBack: Component;
  static wineCardBackDetails: Component;
  static wineCardBackName: Component;
  static wineCardBackMadeBy: Component;
  static wineCardBackCountry: Component;
  static wineCardBackYear: Component;
  static wineCardBackAlcohol: Component;
  static wineCardBackVol: Component;
  static wineCardBackColor: Component;
  static btn: Component;
  constructor(parentNode: HTMLElement, cardData: Wine) {
    super(parentNode, 'div', 'winecards__item', '');
    this.render(cardData);
  }

  render(cardData: Wine) {
    Card.wineCardFace = new Component(this.node, 'div', 'winecards-face');
    Card.wineCardFaceDetails = new Component(Card.wineCardFace.node, 'div', 'winecards-face__details');
    Card.wineCardFaceName = new Component(Card.wineCardFaceDetails.node, 'h2', 'winecards-face__name', `${cardData.name}`);
    Card.wineCardFacePhoto = new Component(Card.wineCardFaceDetails.node, 'div', 'winecards-face__photo');
    Card.wineCardFacePhoto.node.style.backgroundImage = `url(${cardData.image})`;
    Card.wineCardFaceCount = new Component(Card.wineCardFaceDetails.node, 'h3', 'winecards-face__count', `В наличии : ${cardData.count}`);
    Card.wineCardFacePrice = new Component(Card.wineCardFaceDetails.node, 'h3', 'winecards-face__price', `${cardData.price} BYN`);
    Card.wineCardBack = new Component(this.node, 'div', 'winecards-back');
    Card.wineCardBackDetails = new Component(Card.wineCardBack.node, 'div', 'winecards-back__details');
    Card.wineCardBackName = new Component(Card.wineCardBackDetails.node, 'h2', 'winecards-back__name', `${cardData.name}`);
    Card.wineCardBackMadeBy = new Component(Card.wineCardBackDetails.node, 'p', 'winecards-back__madeBy', `Производитель : ${cardData.madeBy}`);
    Card.wineCardBackCountry = new Component(Card.wineCardBackDetails.node, 'p', 'winecards-back__country', `Страна : ${cardData.country}`);
    Card.wineCardBackYear = new Component(Card.wineCardBackDetails.node, 'p', 'winecards-back__year', `Год : ${cardData.year}`);
    Card.wineCardBackColor = new Component(Card.wineCardBackDetails.node, 'p', 'winecards-back__color', `Цвет : ${cardData.color}`);
    Card.wineCardBackAlcohol = new Component(Card.wineCardBackDetails.node, 'p', 'winecards-back__alcohol', `Крепость : ${cardData.alcohol}%`);
    Card.wineCardBackVol = new Component(Card.wineCardBackDetails.node, 'p', '.winecards-back__vol', `Объем : ${cardData.vol}л`);
    Card.btn = new ToCartBtn(Card.wineCardBackDetails.node);
    Card.btn.node.setAttribute('data-articul', `${cardData.id}`)
    if (!cardData.inStock || cardData.count === 0) {
      this.node.style.pointerEvents = 'none';
      this.node.style.opacity = '0.5';
      Card.wineCardFaceCount.node.textContent = 'Нет в наличии';
    }

    cardData.count === 0?  cardData.inStock = false : cardData.inStock = true
   
  }
}