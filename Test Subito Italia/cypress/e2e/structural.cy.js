describe('Structural Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  });

  it('should load the page successfully', () => {
    cy.url().should('include', 'subito.it');
  });

  it('should display the header', () => {
    cy.get('header').should('be.visible');
  });

  it('should display the footer', () => {
    cy.get('footer').should('be.visible');
  });

  it('should have a main content area', () => {
    cy.get('main').should('exist');
  });
});