import { commonData, CommonData } from '../../fixtures/common.data';
import { Components } from '../../ts/types/components.type';
import { Elements } from '../../ts/types/elements.type';

class BasePage {
  public commonData: CommonData;
  public elements: Elements;
  public components: Components;
  public url: string;

  constructor() {
    this.commonData = commonData;
  }

  public goto() {
    cy.visit(this.url);
  }
}

export default BasePage;
