// Testes da Seção de Recomendações - Mercado Livre Homepage

describe('Mercado Livre - Seção de Recomendações', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Secao de recomendacoes existe', function () {
        cy.get('section.discovery, .andes-carousel-snapped').should('exist');
    })

    it('Produtos recomendados com imagem', function () {
        cy.get('.andes-carousel-snapped img').should('have.length.greaterThan', 0);
    })
})