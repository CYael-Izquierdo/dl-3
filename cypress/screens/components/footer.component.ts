import BaseComponent from './base.component';

class Footer extends BaseComponent {
  constructor(locator: string) {
    super(
      locator,
      {
        officesSection: 'li.offices_section',
        // Add the rest of the elements
      }
    );
  }

  goToOffice(city: string) {
    this.getElement(this.elements["officesSection"]).get(`a.city:contains("${city}")`).click()
  }
}

export default Footer;
