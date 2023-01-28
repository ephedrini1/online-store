import Component from "../../utils/component";

export default class ToCartBtn extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode ,'button' ,'cart__add cart__btn', 'в корзину');
  }
}