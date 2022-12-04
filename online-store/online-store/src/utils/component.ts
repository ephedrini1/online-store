export default class Component {
  protected element: HTMLElement;

  constructor(tagName: string, className: string = '', id?: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    id ? (this.element.id = id) : null;
  }

  render() {
    return this.element;
  }
}
