/// <reference types="cypress" />

describe("Types of locators", () => {
  it("Test", () => {
    //By Tag name
    cy.get("input");

    //By ID
    cy.get("#inputEmail1");

    //By Class value
    cy.get(".input-full-width");

    //By Attribute name
    cy.get("[fullwidth]");

    //By Attribute and value
    cy.get('[placeholder="Email"]');

    //By entire Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    //By two attributes
    cy.get('[placeholder="Email"][fullwidth]');

    //By tag, attributes, ID and class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    //By cypress test id
    cy.get('[data-cy="inputEmail1"]');

    //cypress chain and DOM
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();
  });
});
