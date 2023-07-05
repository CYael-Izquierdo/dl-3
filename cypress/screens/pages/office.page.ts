import Footer from '../components/footer.component';
import ScheduleModal from '../components/schedule_modal.component';

import BasePage from './base.page';

class OfficePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://inhouse.decemberlabs.com/locations/austin/';
    this.elements = {
      scheduleButton: 'a.launch-modal-calendar',
      scheduleModal: 'div.calendar-modal'
    };
    this.components = {
      scheduleModal: new ScheduleModal(this.elements.scheduleModal)
    };
  }

  public openScheduleForm() {
    cy.get(this.elements.scheduleButton).click();
  }
}

export default new OfficePage();
