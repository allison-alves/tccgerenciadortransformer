describe('Validar se o link início está redirecionando corremante', () => {
    it('Início', () => {
        cy.inicio()
    });
   
});

describe('Validar a mensage de boas vindas se aparece o nome do usuario correto', () => {
    it('Menssagem de boas-vindas', () => {
        cy.boas_vindas()
    });
})

describe('Validar se o card do mentorado contém suas informações', () => {
    it('Foto, nome, cargo e e-mail', () => {
        cy.card_mentorado()
    });
});

describe('Validar se o link cursos está redirecionando corretamente', () => {
    it('Cursos', () => {
        cy.cursos()
    });

});

/*describe('Valida se o link sair está redirecionando corretamente ', () => {
    it('Sair', () => {
        cy.sair()
    });

});*/
