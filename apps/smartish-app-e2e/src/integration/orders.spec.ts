function fillOutOrderForm() {
  cy.get('[data-e2e="addOrderFormTotal"]').type('100');
  cy.get('[data-e2e="addOrderFormPayment"]')
    .click()
    .get('mat-option')
    .first()
    .click({ force: true });
  cy.get('[data-e2e="addOrderFormNumberOfItems"]').type('1');
  cy.get('[data-e2e="addOrderFormFirstName"]').type('Baker');
  cy.get('[data-e2e="addOrderFormLastName"]').type('Mayfield');
  cy.get('[data-e2e="addOrderFormPhone"]').type('2165780850');
  cy.get('[data-e2e="addOrderFormEmail"]').type(
    'baker.mayfield@clevelandbrowns.com'
  );
  cy.get('[data-e2e="addOrderFormAddressLine1"]').type('76 Lou Groza Blvd');
  cy.get('[data-e2e="addOrderFormCity"]').type('Berea');
  cy.get('[data-e2e="addOrderFormState"]')
    .click()
    .get('mat-option')
    .first()
    .click({ force: true });
  cy.get('[data-e2e="addOrderFormZip"]').type('44017');
}

function addOrder() {
  cy.get('[data-e2e="orders.addButton"]').click();
  cy.get('h1').should('contain', 'Add Order');
  fillOutOrderForm();
}
describe('smartish-app', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('/orders');
  });

  it('should display list of orders', () => {
    cy.get('h1').should('contain', 'Orders');
    cy.get('[data-e2e="orders.addButton"]').should('exist');
    cy.get('tr').children('td').should('have.length.at.least', 2);
  });

  it('can cancel an order', () => {
    addOrder();
    cy.get('[data-e2e="addOrderFormCancelButton"]').click();
    cy.location().should((loc) => expect(loc.href).to.contain('/orders'));
  });

  it('can create a new order', () => {
    addOrder();
    cy.get('[data-e2e="addOrderFormSaveButton"]').click();
  });

  it('can delete an order', () => {
    cy.get('tr').last().get('td > a').first().click();
    cy.get('[data-e2e="moreInfoOrderButton"]').click({ force: true });
    cy.get('[data-e2e="deleteOrderButton"]').click({ force: true });
  });
});
