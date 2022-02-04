Cypress.Commands.add('sair', () => {
    cy.visit('/')
    cy.get(':nth-child(3) > a').should('be.visible').click()
    cy.url().should('be.equal', 'https://outlook.office365.com/mail/')
  })