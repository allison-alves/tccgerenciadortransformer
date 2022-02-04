Cypress.Commands.add('feedback', () => {
    cy.get(':nth-child(3) > .mat-card > .mat-card-actions > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.url().should(
        'be.equal',
        `${Cypress.config("baseUrl")}feedback`
      )
      cy.get('p[class=title]').contains('Maria Santos')
  })