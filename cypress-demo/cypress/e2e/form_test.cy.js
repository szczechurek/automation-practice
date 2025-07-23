// cy.visit("/"); //navigates to page

// //cy.get selector - finds an element by css selector
// cy.get("input#email"); //by ID
// cy.get(".btn-primary"); //by class
// cy.get('button[type="submit"]'); //by attribute
// cy.get("[data-cy=submit]"); //best pracitce

// //cy.contains text - finds an element that contains visible text
// cy.contains("Submit").click();
// cy.contains("Log out");
// cy.get("form").contains("Submit");

// //cy.click() - click the selected item
// cy.get("[data-cy=submit]").click();
// cy.contains("Login").click();

// //cy.type() - types into an input or textarea
// cy.get("input[name=email]").type("robert@example.com");
// cy.get("#password").type("supersecret{enter}");

// //.should - assertions. check if something is true
// cy.get("input[name=email]").should("have.value", "robert@example.com");
// cy.get(".alert-success").should("be-visible");
// cy.url().should("include", "/dashboard");
// cy.get("button").should("be.disabled");

// //.then() - grab values for logic
// cy.get(".price").then(($el) => {
//   const priceText = $el.text();
//   expect(priceText).to.include("$");
// });

describe("Form Test Examples", () => {
  it("should fill out and submit a form", () => {
    cy.visit("https://example.cypress.io/commands/actions");

    //fill email input
    cy.get(".action-email")
      .type("robert@example.com")
      .should("have.value", "robert@example.com");

    //type into disabled input (just for fun)
    cy.get(".action-disabled").should("be.disabled");

    //click checkbox
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should("be.checked");
  });
});
