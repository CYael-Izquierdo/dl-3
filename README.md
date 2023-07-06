# December Labs - Part 3

This repository contains a Cypress project that utilizes the Page Object Model (POM) for efficient and maintainable end-to-end testing.

## Introduction
The Cypress framework is a powerful tool for automating web application testing. This project aims to demonstrate a structured approach to organizing and writing Cypress tests using the Page Object Model (POM) and Page Components pattern.

The POM allows us to separate the test code from the details of the UI, making our tests more readable, modular, and maintainable. Page Objects represent the different pages or components of the application, while Page Components encapsulate reusable elements or patterns within those pages.

## Getting Started
To get started with this project, follow these steps:

1. Clone the repository:
```
git clone thub.com/CYael-Izquierdo/dl-3.git
```
2. Install the dependencies:
```
cd dl-3
npm install
```
## Project Structure
The project structure follows a conventional Cypress project structure with some additional directories:
```
cypress/
├── fixtures/          # Test data in JSON format
├── e2e/               # Test files
├── screens/           # Page Objects representing pages or components in the web
|   ├── components/    # Page Components representing reusable UI elements
|   └── pages/         # Page Objects representing screens
├── plugins/           # Cypress plugins
└── support/           # Cypress support files
```
## Writing Tests
Tests are written in Cypress using the Mocha testing framework syntax. To create a new test, add a new file under the e2e/ directory.

Here's an example of how a test might look:
```
// e2e/sampleTest.spec.js

import homePage from '../screens/pages/HomePage';

describe('Sample Test', () => {
  beforeEach(() => {
    homePage.goto()
  });

  it('Test1', () => {
    homePage.components.footer.goToOffice('Austin');
    // Assertions...
  });
});

```
## Page Objects
Page Objects represent the different pages or components of the application. They encapsulate the functionality and interactions with the UI elements on a specific page or component. Each Page Object corresponds to a single file under the screens/pages/ directory.

Here's an example of how a Page Object might look:
```
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
```
## Page Components
Page Components represent reusable UI elements or patterns within the pages. They encapsulate the functionality and interactions with a specific UI element or group of related UI elements. Each Page Component corresponds to a single file under the screens/components/ directory.
Here's an example of how a Page Component might look:
```
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
```
## Running Tests
To run the tests, use the following command:
```
npm run cy:open
```
This will open the Cypress Test Runner, where you can select and run individual tests or run the entire test suite.

Alternatively, you can run the tests in headless mode using the command:
```
npm run cy:run
```
This will execute the tests in the terminal without opening the Cypress Test Runner.

## Reporting
Cypress generates detailed test reports and screenshots by default. After running the tests, the generated reports can be found in the cypress/reports directory.

## Future Improvements
One of the improvements I would like to make is to perform a small refactor of the page objects and component objects. I am pleased with how they have been implemented so far, but I believe there is room for enhancing the interfaces displayed by these objects when interacting with them in the test cases.
