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

  it("radio buttons", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then((radioButtons) => {
        cy.wrap(radioButtons).eq(0).check({ force: true }).should("be.checked");
        cy.wrap(radioButtons).eq(1).check({ force: true });
        cy.wrap(radioButtons).eq(0).should("not.be.checked");
        cy.wrap(radioButtons).eq(2).should("be.disabled");
      });
  });

  it("checkboxes", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    cy.get('[type="checkbox"]').check({ force: true });
  });

  it("Date picker", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    let date = new Date();
    date.setDate(getDate() + 5);
    let futureDate = date.getDate();
    let dateToAssert = `Sep ${futureDate}, 2023`;

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        cy.get(".day-cell").not(".bounding-month").contains("21").click();
        cy.wrap(input).invoke("prop", "value").should("contain", dateToAssert);
        cy.wrap(input).should("have.value", dateToAssert);
      });
  });

  it("Lists and dropdowns", () => {
    cy.visit("/");

    //1
    cy.get("nav nb-select").click();
    cy.get(".option-list").contains("Dark").click;
    cy.get("nav nb-select").should("contain", "Dark");

    //2
    cy.get("nav nb-select").then((dropDown) => {
      cy.wrap(dropDown).click();
      cy.get(".option-list nb-option").each((listItem, index) => {
        const itemText = listItem.text().trim();
        cy.wrap(listItem).click();
        cy.wrap(dropDown).should("contain", itemText);
        if (index < 3) {
          cy.wrap(dropDown).click();
        }
      });
    });
  });
});
