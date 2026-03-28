// Testes dos Elementos Estruturais - Mercado Livre Homepage

describe('Mercado Livre - Elementos Estruturais', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Header fixo no topo', function () {
        cy.get('.nav-header').should('be.visible');
    })

    it('Footer presente', function () {
        cy.get('.nav-footer').should('exist');
    })

    it('Pagina carrega completamente', function () {
        cy.window().then((win) => {
            expect(win.document.readyState).to.eq('complete');
        });
    })
})