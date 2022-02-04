Cypress.Commands.add('valid_page', () => {
    cy.visit('/')
    cy.get('.mat-toolbar-row').find('img').should('have.attr', 'src', 'Transformando_logo.png')
})