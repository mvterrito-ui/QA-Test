// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('acceptCookies', () => {
  cy.get('body').then($body => {
    if ($body.find('#didomi-notice-agree-button').length > 0) {
      cy.get('#didomi-notice-agree-button', { timeout: 5000 }).click();
    }
  });
});