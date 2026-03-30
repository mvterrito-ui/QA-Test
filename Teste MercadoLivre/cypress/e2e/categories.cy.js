// Testes das Categorias - Mercado Livre Homepage

describe('Mercado Livre - Categorias', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        cy.visit('https://www.mercadolivre.com.br', { timeout: 30000 })
    })

    it('Secao de categorias visivel', function () {
        cy.get('.categories-new-design').should('be.visible');
    })

    it('Titulo Categorias visivel', function () {
        cy.contains('Categorias').should('be.visible');
    })

    it('Categoria - Veiculos', function () {
        cy.get('.categories-new-design').contains('Veículos').should('be.visible');
    })

    it('Categoria - Celulares e Telefones', function () {
        cy.get('.categories-new-design').contains('Celulares').should('be.visible');
    })

    it('Categoria - Eletrodomesticos', function () {
        cy.get('.categories-new-design').contains('Eletrodomésticos').should('be.visible');
    })

    it('Categoria - Esportes e Fitness', function () {
        cy.get('.categories-new-design').contains('Esportes').should('be.visible');
    })

    it('Categoria - Ferramentas', function () {
        cy.get('.categories-new-design').contains('Ferramentas').should('be.visible');
    })

    it('Categoria - Moda', function () {
        cy.get('.categories-new-design').contains('Moda').should('be.visible');
    })

    it('Icones de categorias carregados', function () {
        cy.get('.categories-new-design img').should('have.length.at.least', 5);
    })

    it('Links de categorias sao clicaveis', function () {
        cy.get('.categories-new-design a').first().should('have.attr', 'href');
    })
})