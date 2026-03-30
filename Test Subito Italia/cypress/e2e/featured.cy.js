describe('Featured Ads Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  });

  it('should display the featured section', () => {
    cy.contains('In evidenza per te').should('be.visible');
  });

  it('should display ad images', () => {
    cy.get('img').should('have.length.greaterThan', 0);
  });

  it('should have ad titles', () => {
    cy.get('h3').should('exist');
  });
});