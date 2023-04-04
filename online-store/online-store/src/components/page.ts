import Component from "../utils/component";
import Header from "./header/header";
import WineCards from "./winecards/winecards";
import { Wine } from "../types/products";
import { goods } from "../constants/goods";
import Footer from "./footer/footer";
import { Filters } from "./filters/filters";
import FilterSettings from "./filters/filterSettings";
import { LocalStorage, localStorageKeys } from "../utils/localstorage";

export default class Page extends Component {
  header: Header;
  filters: Filters;
  filterSettings: FilterSettings;
  winecards: WineCards;
  totalItems: number;
  footer: Footer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div");
    this.header = new Header(this.node);
    this.filters = new Filters(this.node);
    this.filterSettings = new FilterSettings();
    this.winecards = new WineCards(this.node);
    this.filters.render();
    this.filterSettings.filter();
    this.setEventListeners();
    this.totalItems =
      this.header.cart.cartList.reduce(
        (acc: number, el: Wine) => acc + el.inCart,
        0
      ) || 0;
    this.footer = new Footer(this.node);
  }

  setEventListeners() {
    let articul: number;
    document.addEventListener("click", (event) => {
      if (event.target) {
        if ((<HTMLElement>event.target).classList.contains("cart__add")) {
          articul = Number((<HTMLElement>event.target).dataset["articul"]);
          this.header.cart.cartAdd(articul);
          this.winecards.rerender();
          this.header.cart.render();
          if (this.totalItems < 20) {
            this.totalItems += 1;
            this.header.cart.totalLabel.node.textContent = `${this.totalItems}`;
          }
        }
        if ((<HTMLElement>event.target).classList.contains("cart__remove")) {
          articul = Number((<HTMLElement>event.target).dataset["articul"]);
          this.header.cart.cartRemove(articul);
          this.winecards.rerender();
          this.header.cart.render();
          if (this.totalItems > 0) {
            this.totalItems -= 1;
            this.header.cart.totalLabel.node.textContent = `${this.totalItems}`;
          }
        }

        if ((<HTMLElement>event.target).classList.contains("close-popup")) {
          this.header.cart.cartClose();
        }

        if ((<HTMLElement>event.target).classList.contains("error__btn")) {
          if ((<HTMLElement>event.target).classList.contains("search__btn")) {
            this.header.search.popupClose();
            this.winecards.rerender();
          }
          if ((<HTMLElement>event.target).classList.contains("filter__btn")) {
            this.filterSettings.resetFilters();
            this.filterSettings.popupClose();
          }
        }
      }
      this.header.cart.node.onclick = () => {
        this.header.cart.cartOpen();
      };
    });

    this.header.search.searchInput.addEventListener("input", () => {
      this.header.search.search(goods);
      this.winecards.rerender(this.header.search.searchData);
    });

    this.filters.select.node.addEventListener("change", () => {
      this.sort();
      this.winecards.rerender(
        LocalStorage.getLocalStorage(localStorageKeys.onPage)
      );
    });

    this.filters.clearHistory.node.addEventListener("click", () => {
      this.filterSettings.resetAll();
      this.winecards.rerender(goods);
    });

    this.filters.resetFilters.node.addEventListener("click", () => {
      this.filterSettings.resetFilters();
      this.winecards.rerender(
        LocalStorage.getLocalStorage(localStorageKeys.onPage)
      );
    });

    this.filters.filtersContainer.node.addEventListener("change", () => {
      this.filterSettings.filter();
      if (!LocalStorage.getLocalStorage(localStorageKeys.onPage).length) {
        this.filterSettings.openPopup();
      }
      this.sort();
      this.winecards.rerender(
        LocalStorage.getLocalStorage(localStorageKeys.onPage)
      );
    });
  }

  sort() {
    const select = this.filters.select.node as HTMLSelectElement;
    const item = select.value;
    if (item === "ByPriceUp") {
      this.filterSettings.sortPriceUp(
        LocalStorage.getLocalStorage(localStorageKeys.onPage) || goods
      );
    }
    if (item === "ByPriceDown") {
      this.filterSettings.sortPriceDown(
        LocalStorage.getLocalStorage(localStorageKeys.onPage) || goods
      );
    }
  }
}
