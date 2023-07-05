import { commonData } from "../fixtures/common.data";
import ScheduleModal from "../screens/components/schedule_modal.component";
import homePage from "../screens/pages/home.page";
import officePage from "../screens/pages/office.page";

describe('December Labs - Part 3', () => {
  it('Tech Test - Part 3', () => {
    // Ingresar a la web de December Labs
    homePage.goto();

    // Validar que se abre el sitio web correctamente, validando:
    // - Titulo
    cy.title().should('eq', commonData.home.title);
    // - Menu superior
    homePage.components['topMenu'].get().should('be.visible');

    // Navegar a la página de la oficina de Austin desde el sitio web (el botón para acceder a lapágina se encuentra en el footer de la web de December Labs)
    homePage.components['footer'].goToOffice('Austin');

    // Validar que la página se despliega, validando:
    // - Titulo
    cy.title().should('eq', commonData.austinOficce.title);
    // - Url
    cy.url().should('eq', commonData.austinOficce.url);

    // Hacer click en el botón: ‘Schedule free consultation’
    officePage.openScheduleForm();

    // Validar que se despliega popup con calendario
    const modal: ScheduleModal = officePage.components['scheduleModal'];
    modal.get().should('be.visible');

    // Cerrar popup
    modal.close();

    // Validar que el popup ya no se despliega
    modal.get().should('not.be.visible');
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
})