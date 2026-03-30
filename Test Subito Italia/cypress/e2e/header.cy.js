describe('Header Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  });

  it('should display the logo', () => {
    cy.get('header').should('be.visible');
  });

  it('should display the search input', () => {
    cy.get('input[type="search"]').should('be.visible');
  });

  it('should display the category select', () => {
    cy.contains('Tutte le categorie').should('be.visible');
  });

  it('should display the login link', () => {
    cy.contains('Accedi').should('exist');
  });

  it('should display the sell button', () => {
    cy.contains('Vendi').should('exist');
  });

  it('should display the messages link', () => {
    cy.contains('Messaggi').should('exist');
  });
});