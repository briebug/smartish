describe('smartish-app', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('/');
  });

  it('should display dashboard', () => {
    cy.get('h1').should('contain', 'Dashboard');
    cy.get('smartish-dashboard-preview').should('have.length', 3);
    cy.location().should((loc) => expect(loc.href).to.contain('/admin'));
  });
});
