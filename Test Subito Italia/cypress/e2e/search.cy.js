describe('Search Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  });

  it('should have a search input field', () => {
    cy.get('input[type="search"]').should('be.visible');
  });

  it('should allow typing in the search input', () => {
    cy.get('input[type="search"]').first().type('auto', {force: true});
    cy.get('input[type="search"]').first().should('have.value', 'auto');
  });

  it('should clear the search input', () => {
    cy.get('input[type="search"]').first().type('auto', {force: true});
    cy.get('input[type="search"]').first().clear({force: true});
    cy.get('input[type="search"]').first().should('have.value', '');
  });

  it('should submit empty search', () => {
    cy.get('form').submit();
    cy.url().should('include', 'annunci-italia');
  });

  it('should submit search with term', () => {
    cy.get('input[type="search"]').first().type('auto');
    cy.get('form').submit();
    cy.url().should('include', 'annunci-italia');
  });

  it('should have a search form', () => {
    cy.get('form').should('exist');
  });
});