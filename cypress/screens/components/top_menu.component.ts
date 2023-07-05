import BaseComponent from './base.component';

class TopMenuComponent extends BaseComponent {
  constructor(locator: string) {
    super(
      locator,
      {
        logo: 'a.content_logo',
        // Add the rest of the elements
      }
    );
  }

}

export default TopMenuComponent;
