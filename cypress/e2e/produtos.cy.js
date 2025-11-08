describe("Fluxo dos produtos", () => {
    const urlSite = "https://www.saucedemo.com"
    const usuario = "standard_user";
    const senha = "secret_sauce";

    beforeEach("Login com credenciais válidas", () => {
        cy.visit(urlSite);
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
    });

    it("Validar exibição da lista de produtos > Todos os produtos aparecem após login", () => {
        cy.get('[data-test="inventory-container"] [data-test="inventory-item"]').should('have.length', 6);
    });

    it("Ordenação A → Z > Produtos em ordem alfabética crescente", () => {
        cy.get('[data-test="product-sort-container"]').select("Name (A to Z)");
        cy.get('[data-test="inventory-container"]').first().should('contain', 'Sauce Labs Backpack');
    });

    it("Ordenação Z → A > Produtos em ordem alfabética decrescente", () => {
        cy.get('[data-test="product-sort-container"]').select("Name (Z to A)");
        cy.get('[data-test="inventory-container"]').first().should('contain', 'Test.allTheThings() T-Shirt (Red)');
    });
});