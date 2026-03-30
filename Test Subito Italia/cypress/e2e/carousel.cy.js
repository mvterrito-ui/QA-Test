describe('Carousel Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  });

  it('should display the car carousel', () => {
    cy.contains('Cerca per tipo di auto').should('be.visible');
  });

  it('should have carousel images', () => {
    cy.get('img').should('have.length.greaterThan', 0);
  });

  it('should have navigation links', () => {
    cy.get('a').contains('Vedi annunci').should('be.visible');
  });

  it('should display multiple car types', () => {
    cy.contains('Neopatentati').should('be.visible');
    cy.contains('Potenti').should('be.visible');
    cy.contains('4x4').should('be.visible');
  });
});