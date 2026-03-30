// Testes do Acesso Rápido - Mercado Livre Homepage

describe('Mercado Livre - Acesso Rápido (Dynamic Access)', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Secao de acesso rapido visivel', function () {
        cy.get('.dynamic-access').should('be.visible');
    })

    it('Links de acesso rapido presentes', function () {
        cy.get('.dynamic-access a').should('have.length.at.least', 3);
    })

    it('Cards de acesso rapido com titulo', function () {
        cy.get('.dynamic-access [class*="title"]').should('have.length.at.least', 1);
    })

    it('Todos os icones de acesso carregados', function () {
        cy.get('.dynamic-access img').should('have.length.at.least', 4);
    })
})