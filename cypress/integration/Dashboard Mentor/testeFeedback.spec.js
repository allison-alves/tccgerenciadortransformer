describe('Validar se o botao "ver mais" em feedback redireciona para a página correta', () => {
    it('Feedback', () => {
        cy.visit('/')
        cy.feedback()
    });
   
describe('Validar se o texto está sendo registrado', () => {
    it('teste', () => {
        cy.get('#mat-input-0').type('Teste')
        cy.get('.mat-button-wrapper').click()
        cy.get('.mat-simple-snackbar > span').should('have.text', 'Feedback enviado com sucesso')
    });

});

});