// Testes da Funcionalidade de Busca - Mercado Livre Homepage

describe('Mercado Livre - Funcionalidade de Busca', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Digitar no campo de busca', function () {
        cy.get('input.nav-search-input').type('iPhone 15');
        cy.get('input.nav-search-input').should('have.value', 'iPhone 15');
    })

    it('Campo de busca aceita texto e limpa', function () {
        cy.get('input.nav-search-input').type('Notebook').should('have.value', 'Notebook');
        cy.get('input.nav-search-input').clear().should('have.value', '');
    })

    it('Campo de busca vazio nao redireciona', function () {
        cy.get('button.nav-search-btn').click();
        cy.url().should('include', 'mercadolivre.com.br');
    })

    it('Formulario de busca possui action correta', function () {
        cy.get('form.nav-search').should('have.attr', 'action').and('include', 'search');
    })

    it('Input de busca possui name as_word', function () {
        cy.get('input.nav-search-input').should('have.attr', 'name', 'as_word');
    })
})