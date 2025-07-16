describe("My First Test", () => {
  it("Visit the Cypress example site", () => {
    cy.visit("/");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email")
      .type("robert@cypress.io")
      .should("have.value", "robert@cypress.io");
  });
});
