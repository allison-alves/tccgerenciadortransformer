const { faker } = require('@faker-js/faker');
faker.locale = "pt_BR";
const dayjs = require('dayjs');
Cypress.Commands.add('add_curso', () => {

    const todaysDate = dayjs().format('YYYY-MM-DD')

    cy.visit('/')
    cy.get(':nth-child(2) > .mat-card > .mat-card-actions > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.get('.blue').click()
    cy.get('#mat-input-0').click()
    cy.wait(1000)
    cy.get('#mat-input-0').type(faker.name.jobTitle())
    cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex').click()
    cy.get('#mat-option-4 > .mat-option-text').click()
    cy.get('#mat-input-1').type(faker.datatype.number({'min':20, 'max':40}))
    cy.get('#mat-input-2').type('http://www.google.com.br')
    cy.get('#mat-input-3').type(faker.lorem.lines())
    cy.get('#mat-input-4').type(`${todaysDate}`)
    cy.get('.ml-2 > .mat-button-wrapper').click()
    cy.get('.mat-simple-snackbar').should('have.text', 'Curso associado com sucesso')
})
