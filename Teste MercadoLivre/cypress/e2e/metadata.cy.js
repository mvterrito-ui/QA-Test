// Testes dos Metadados da Página - Mercado Livre Homepage

describe('Mercado Livre - Metadados da Página', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Titulo correto', function () {
        cy.title().should('include', 'Mercado Livre');
    })

    it('Canonical URL', function () {
        cy.get('link[rel="canonical"]').should('have.attr', 'href').and('include', 'mercadolivre.com.br');
    })

    it('Idioma da pagina e pt-BR', function () {
        cy.get('html').should('have.attr', 'lang', 'pt-BR');
    })

    it('Favicon presente', function () {
        cy.get('link[rel*="icon"]').should('exist');
    })
})