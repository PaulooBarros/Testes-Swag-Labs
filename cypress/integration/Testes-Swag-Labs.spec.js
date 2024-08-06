/// <reference types="Cypress" />
describe('Swag Labs', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
    })
    it('Fazendo a verificação do Título', function(){
        cy.title().should('be.equal', 'Swag Labs')
    })
    it('Verificando se após o login há o redirecionamento para nova URL', function(){
        cy.get('.product_label').should('be.visible')
    })
    it('Adicionando 3 itens ao carrinho', function(){
        //cy.get('.btn_secondary').click({ multiple: true })
        cy.AdicionandoTShirtPretaaocarrinho()
        cy.get('.inventory_details_back_button').click()
        cy.AdicionandoJaquetaVerdeaoCarrinho()
        cy.get('.inventory_details_back_button').click()
        cy.AdicionandoSauceLabsBikeLightaocarrinho()
        cy.get('.inventory_details_back_button').click()
    })
    it('Clicando no Carrinho para Finalizar Compra com 3 Itens', function(){
        cy.get('.btn_secondary').click({ multiple: true })
        cy.AdicionandoItem6aoCarrinho()
        cy.get('.inventory_details_back_button').click()
        cy.AdicionandoJaquetaVerdeaoCarrinho()
        cy.get('.inventory_details_back_button').click()
        cy.AdicionandoSauceLabsBikeLightaocarrinho()
        cy.get('.inventory_details_back_button').click()
        cy.get('.svg-inline--fa').click()
        cy.get('.btn_action').click()
    })

    it('Cancelando Compra de Itens já no Carrinho', function(){
        cy.CancelandoCompradeItensjánoCarrinho()
    })

    it('Verificando se a compra foi efetuada com sucesso após todas as validações', function(){
        cy.PreenchendoTudoFinalizandoCompra()
    })

    it('Fazer Logout do Site após finalizar Compra', function(){
        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('#login-button').should('be.visible')
    })
})