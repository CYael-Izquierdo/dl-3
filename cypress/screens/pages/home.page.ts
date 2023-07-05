import Footer from '../components/footer.component';
import TopMenuComponent from '../components/top_menu.component';

import BasePage from './base.page';

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://inhouse.decemberlabs.com/';
    this.elements = {
      topMenu: 'nav.navigation_bar',
      footer: 'footer'
    };
    this.components = {
      topMenu: new TopMenuComponent(this.elements.topMenu),
      footer: new Footer(this.elements.footer)
    };
  }

  public goToCareerPage() {
    this.components.header.goToCareerPage();
  }
}

export default new HomePage();
