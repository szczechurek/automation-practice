/// <reference types="cypress" />

describe("test", () => {
  it("Type into input", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-email").type("test@example.com");
    cy.get(".action-email").should("have.value", "test@example.com");
    cy.get('.action-checkboxes [type="checkbox"]').first().check();
    cy.get('.action-checkboxes [type="checkbox"]').first().should("be.checked");
    cy.get(".action-select").select("apples");
    cy.get(".action-select").should("have.value", "fr-apples");
  });
});

//Challenge
// Visit the page.

// Type john.doe@email.com into the email input.

// ✅ Assert that the value is correctly entered.

// Check the second checkbox (not the first!).

// ✅ Assert it is checked.

// Select the option "Bananas" from the dropdown.

// ✅ Assert that the value is "fr-bananas".

// (Optional Bonus) Clear the email input field and check that it's empty.

describe("Challenge", () => {
  it("Complete challenge", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-email").type("john@example.com");
    cy.get(".action-email").should("have.value", "john@example.com");
    cy.get('.action-checkboxes [type="checkbox"]:enabled').eq(1).check();
    cy.get('.action-checkboxes [type="checkbox"]:enabled')
      .eq(1)
      .should("be.checked");
    cy.get(".action-select").select("bananas");
    cy.get(".action-select").should("have.value", "fr-bananas");
  });
});

//Challenge 2
describe("Challenge-2", () => {
  it("Button", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-form").contains("button", "Submit").click();
    cy.url().should("include", "/commands/actions");
  });
});
