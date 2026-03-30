describe('Categories Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  });

  it('should display the Motori category', () => {
    cy.contains('Motori').should('be.visible');
  });

  it('should display the Market category', () => {
    cy.contains('Market').should('be.visible');
  });

  it('should display the Immobili category', () => {
    cy.contains('Immobili').should('be.visible');
  });

  it('should display the Lavoro category', () => {
    cy.contains('Lavoro').should('be.visible');
  });

  it('should have links for Motori category', () => {
    cy.contains('Motori').should('have.prop', 'tagName', 'BUTTON');
  });

  it('should have links for Market category', () => {
    cy.contains('Market').should('have.prop', 'tagName', 'BUTTON');
  });

  it('should have links for Immobili category', () => {
    cy.contains('Immobili').should('have.prop', 'tagName', 'BUTTON');
  });

  it('should have links for Lavoro category', () => {
    cy.contains('Lavoro').should('have.prop', 'tagName', 'BUTTON');
  });

  it('should display category icons', () => {
    cy.get('img').should('have.length.greaterThan', 0);
  });

  it('should display all main categories', () => {
    cy.contains('Motori').should('exist');
    cy.contains('Market').should('exist');
    cy.contains('Immobili').should('exist');
    cy.contains('Lavoro').should('exist');
  });
});