//Valida mensagem de boas vindas.
Cypress.Commands.add('boas_vindas', () => {
  cy.get('.col-12 > .title').should('have.text', 'Olá, Allison André.')
})
//----------------------------------------------------------------------

//Valida os links do navbar se estão redirecionando corremante.
Cypress.Commands.add('inicio', () => {
    cy.visit('/')
    cy.get('.navbar-pages > :nth-child(1) > a').should('be.visible').click()
    cy.url().should(
        'be.equal',
        `${Cypress.config("baseUrl")}home`
      )
})

Cypress.Commands.add('cursos', () => {
  cy.get('.navbar-pages > :nth-child(2) > a').click()
  cy.url().should(
      'be.equal',
      `${Cypress.config("baseUrl")}cursos`
    )
})

//------------------------------------------------------------------

//Valida o detalhe dos cursos
Cypress.Commands.add('cursos_detalhes', () => {
  cy.get('.navbar-pages > :nth-child(2) > a').click()
 
})

//Valida o card do mentorado
Cypress.Commands.add('card_mentorado', () => {
  cy.get('[style="order: 0;"] > .mat-card > .mat-card-content > .title').should('have.text', ' Transformer: Maria Santos ')
  cy.get('[style="order: 0;"] > .mat-card > .mat-card-content > :nth-child(3)').should('have.text', 'Quality Assurance')
  cy.get('[style="order: 0;"] > .mat-card > .mat-card-content > :nth-child(4)').should('have.text', 'maria@labsit.io')
})