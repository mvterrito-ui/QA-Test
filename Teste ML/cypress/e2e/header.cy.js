// Testes do Header e Navegação - Mercado Livre Homepage

describe('Mercado Livre - Header e Navegação', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Logo visivel e clicavel', function () {
        cy.get('a.nav-logo').should('be.visible').and('have.attr', 'href').and('include', 'mercadolivre.com.br');
    })

    it('Campo de busca visivel', function () {
        cy.get('input.nav-search-input').should('be.visible').and('have.attr', 'placeholder');
    })

    it('Botao de busca visivel', function () {
        cy.get('button.nav-search-btn').should('be.visible');
    })

    it('Link Crie a sua conta', function () {
        cy.contains('a', 'Crie a sua conta').should('be.visible');
    })

    it('Link Entre', function () {
        cy.contains('a', 'Entre').should('be.visible');
    })

    it('Link Compras', function () {
        cy.contains('a', 'Compras').should('be.visible');
    })

    it('Icone do carrinho visivel', function () {
        cy.get('a.nav-cart').should('be.visible');
    })
})