describe("Fluxo do Login", () => {
    const urlSite = "https://www.saucedemo.com"
    const usuario = "standard_user";
    const senha = "secret_sauce";

    beforeEach("Acessar o site", () => {
        cy.visit(urlSite);
    });

    it("Login com credenciais válidas > Redirecionar para página de produtos", () => {
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
        cy.url().should("include", "/inventory.html");
    });

    it("Login com senha inválida > Exibir mensagem de erro", () => {
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type("senha_errada");
        cy.get('[data-test="login-button"]').click();
        cy.get("[data-test='error']").should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it("Login com usuário bloqueado > Exibir mensagem “user has been locked out", () => {
        cy.get('[data-test="username"]').type("locked_out_user");
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it("Login com campos vazios > Impedir login e exibir alerta", () => {
        cy.get('[data-test="login-button"]').click();
        cy.get("[data-test='error']").should('contain', 'Epic sadface: Username is required');
    });
});