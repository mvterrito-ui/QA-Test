describe('Metadata Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  });

  it('should have the correct page title', () => {
    cy.title().should('include', 'Subito');
  });

  it('should have the correct language', () => {
    cy.get('html').should('have.attr', 'lang', 'it');
  });

  it('should have a favicon', () => {
    cy.get('link[rel="icon"]').should('exist');
  });
});