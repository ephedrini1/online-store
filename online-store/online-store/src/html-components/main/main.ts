import Component from '../../utils/component';
import Winecards from '../winecards/winecards';
import Filters from '../filters/filters';

export default class Main extends Component {
  private className: string;
  private winecards: Component;
  private filters: Component;
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.className = className;
    this.winecards = new Component('section','winecards','winecards');
    this.filters = new Component('section','filters','filters');
  }
  renderFilters() {
    const filtersSection: HTMLElement = this.filters.render();
    filtersSection.innerHTML = Filters.filters;
    this.container.append(filtersSection);
  }

    renderWinecards() {
      const winecardsSection: HTMLElement = this.winecards.render();
      winecardsSection.innerHTML = Winecards.winecards;
      this.container.append(winecardsSection);
    }

  render() {
    this.renderFilters();
     this.renderWinecards();
    return this.container;
  }
}