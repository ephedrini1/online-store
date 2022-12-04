// export default class Component {
//   protected element: HTMLElement;

//   constructor(tagName: string, className: string = '', id?: string) {
//     this.element = document.createElement(tagName);
//     this.element.className = className;
//     id ? (this.element.id = id) : null;
//   }

//   render() {
//     return this.element;
//   }
// }

export default class Component {
  node: HTMLElement;
  constructor(parentNode: HTMLElement, tagName = '', className = '', content = '') {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;
    if (parentNode) {
      parentNode.append(element);
    }
    this.node = element;
  }

  destroy() {
    this.node.remove();
  }
}
