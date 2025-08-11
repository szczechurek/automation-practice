/// <reference types="cypress" />

describe("Assertions Warm-up", () => {
  it("Check properties of elements", () => {
    cy.visit("https://example.cypress.io/commands/assertions");

    //1. Assert that the forst .table element is visible
    cy.get(".table").first().should("be.visible");

    //2. Assert that the .table has at least 3 rows
    cy.get(".table tbody tr").should("have.length.greaterThan", 2);

    //3. Assert that the first row contains text "Chai"
    cy.get(".table tbody tr").first().should("contain.text", "Column content");

    //4. Chain multiple assertions
    cy.get("table")
      .first()
      .should("have.class", "table-bordered")
      .and("be.visible");
  });
});
