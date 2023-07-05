import BaseComponent from './base.component';

class ScheduleModal extends BaseComponent {
  constructor(locator: string) {
    super(
      locator,
      {
        closeButton: 'div.btn-close-modal',
        // Add the rest of the elements
      }
    );
  }

  close() {
    this.getElement(this.elements["closeButton"]).click()
  }
}

export default ScheduleModal;
