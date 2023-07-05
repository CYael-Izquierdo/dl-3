import { Elements } from '../../ts/types/elements.type';

class BaseComponent {
  public elements: Elements;

  constructor(locator: string, elements: Elements) {
    this.elements = {
      root: locator,
      ...elements
    }
  }

  getElement(el: string) {
    return this.get().find(el);
  }

  get() {
    return cy.get(this.elements.root);
  }
}

export default BaseComponent;
