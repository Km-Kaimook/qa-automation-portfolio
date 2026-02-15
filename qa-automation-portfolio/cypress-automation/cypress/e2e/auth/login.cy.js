
describe("Login Flow", () => {
  it("should login successfully", () => {
    cy.visit("/login");
    cy.get("[data-cy=email]").type("test@mail.com");
    cy.get("[data-cy=password]").type("Password123");
    cy.get("[data-cy=submit]").click();
    cy.url().should("include", "/dashboard");
  });
});
