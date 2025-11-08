
describe("Fluxo do carrinho", () => {
    const urlSite = "https://www.saucedemo.com"
    const usuario = "standard_user";
    const senha = "secret_sauce";

    beforeEach("Login com credenciais válidas", () => {
        cy.visit(urlSite);
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
    });

    it("Adicionar 1 produto ao carrinho > Contador do carrinho = 1", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should("contain", "1");
    });

    it("Adicionar 2 produtos ao carrinho > Contador do carrinho = 2", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_badge').should("contain", "2");  
    })

    it("Remover produto do carrinho > Carrinho atualiza corretamente", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should("contain", "1");
    })

    it("Visualizar carrinho > Itens adicionados são exibidos", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.contains("Sauce Labs Backpack").should("be.visible");
        cy.contains("Sauce Labs Bike Light").should("be.visible");
    })
});