describe("Fluxo do checkout", () => {
    const urlSite = "https://www.saucedemo.com"
    const usuario = "standard_user";
    const senha = "secret_sauce";

    beforeEach("Login com credenciais válidas e adição de itens no carrinho", () => {
        cy.visit(urlSite);
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
    });

    it("Preencher dados válidos > Avança para página de revisão", () => {
        cy.get('[data-test="firstName"]').type("Gustavo");
        cy.get('[data-test="lastName"]').type("Vieira");
        cy.get('[data-test="postalCode"]').type("19820000");
        cy.get('[data-test="continue"]').click();
        cy.contains("Checkout: Overview").should("be.visible");
    });

    it("Campos vazios no checkout > Exibir aviso de preenchimento obrigatório", () => {
        cy.get('[data-test="continue"]').click();
        cy.get('.error-message-container').should('contain', 'Error: First Name is required');
    });

    it("Finalizar compra > Exibir mensagem “Thank you for your order", () => {
        cy.get('[data-test="firstName"]').type("Gustavo");
        cy.get('[data-test="lastName"]').type("Vieira");
        cy.get('[data-test="postalCode"]').type("19820000");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.contains("Thank you for your order!").should("be.visible");
    });

    it("Cancelar checkout > Retorna para lista de produtos", () => {
        cy.get('[data-test="firstName"]').type("Gustavo");
        cy.get('[data-test="lastName"]').type("Vieira");
        cy.get('[data-test="postalCode"]').type("19820000");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="cancel"]').click();
        cy.contains("Products").should("be.visible");
    })
});