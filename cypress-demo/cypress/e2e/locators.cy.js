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

it("save subject of the command", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
  cy.contains("nb-card", "Using the Grid")
    .find('[for="inputEmail1"]')
    .should("contain", "Email");
  cy.contains("nb-card", "Using the Grid")
    .find('[for="inputPassword2"]')
    .should("contain", "Password");
});

it("extract text value", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();

  //1
  cy.get('[for="exampleInputEmail1"]').should("contain", "Email adress");

  //2
  cy.get('[for="exampleInputEmail1"]').then((label) => {
    const labelText = label.text();
    expect(labelText).to.equal("Email adress");
    cy.wrap(labelText).should("contain", "Email adress");
  });

  //3
  cy.get('[for="exampleInputEmail1"]')
    .invoke("text")
    .then((text) => {
      expect(text).to.equal("Email adress");
    });

  //4
  cy.get('[for="exampleInputEmail1"]')
    .invoke("attr", "class")
    .then((classValue) => {
      expect(classValue).to.equal("label");
    });

  //5 invoke property
  cy.get("#exampleInputEmail1").type("test@test.com");
  cy.get("#exampleInputEmail1")
    .invoke("prop", "value")
    .should("contain", "test@test.com");
});
