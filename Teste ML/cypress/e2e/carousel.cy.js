// Testes do Carousel Principal - Mercado Livre Homepage

describe('Mercado Livre - Carousel Principal', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Banner principal visivel', function () {
        cy.get('.andes-carousel-snapped').first().should('be.visible');
    })

    it('Imagem do banner carregada', function () {
        cy.get('.andes-carousel-snapped img').first().should('exist').and('have.attr', 'src');
    })

    it('Carousel possui multiplas imagens', function () {
        cy.get('.andes-carousel-snapped img').should('have.length.greaterThan', 1);
    })

    it('Carousel possui botoes de navegacao', function () {
        cy.get('.andes-carousel-snapped button').should('have.length.greaterThan', 0);
    })
})