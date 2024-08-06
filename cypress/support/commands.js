// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('AdicionandoItem6aoCarrinho', function(){
    cy.get('#item_3_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click({ force: true })
})

Cypress.Commands.add('AdicionandoJaquetaVerdeaoCarrinho', function(){
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
})

Cypress.Commands.add('AdicionandoSauceLabsBikeLightaocarrinho', function(){
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
})

Cypress.Commands.add('AdicionandoSauceLabsBackPackaocarrinho', function(){
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
})

Cypress.Commands.add('AdicionandoTShirtPretaaocarrinho', function(){
    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
})

Cypress.Commands.add('AdicionandoSauceLabsOnesietaocarrinho', function(){
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()

})

Cypress.Commands.add('PreenchendoTudoFinalizandoCompra', function(){
      cy.get('.btn_secondary').click({ multiple: true })
      cy.AdicionandoItem6aoCarrinho()
      cy.get('.inventory_details_back_button').click()
      cy.AdicionandoJaquetaVerdeaoCarrinho()
      cy.get('.inventory_details_back_button').click()
      cy.AdicionandoSauceLabsBikeLightaocarrinho()
      cy.get('.inventory_details_back_button').click()
      cy.get('.svg-inline--fa').click()
      cy.get('.btn_action').click()
      cy.get('[data-test="firstName"]').type('Paulo Gustavo', {delay: 0})
      cy.get('[data-test="lastName"]').type('Angelo de Barros', {delay: 0})
      cy.get('[data-test="postalCode"]').type(49032490)
      cy.get('.btn_primary').click()
      cy.get('.btn_action').click()
      cy.get('.complete-header').should('be.visible')
})

Cypress.Commands.add('CancelandoCompradeItensjánoCarrinho', function(){
    cy.get('.btn_secondary').click({ multiple: true })
    cy.AdicionandoItem6aoCarrinho()
    cy.get('.inventory_details_back_button').click()
    cy.AdicionandoJaquetaVerdeaoCarrinho()
    cy.get('.inventory_details_back_button').click()
    cy.AdicionandoSauceLabsBikeLightaocarrinho()
    cy.get('.inventory_details_back_button').click()
    cy.get('.svg-inline--fa').click()
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('Paulo Gustavo', {delay: 0})
    cy.get('[data-test="lastName"]').type('Angelo de Barros', {delay: 0})
    cy.get('[data-test="postalCode"]').type(49032490)
    cy.get('.btn_primary').click()
    cy.get('.cart_cancel_link').click()
    cy.get('.product_label').should('be.visible')
})