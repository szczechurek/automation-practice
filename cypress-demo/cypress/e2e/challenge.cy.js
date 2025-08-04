// Challenge: Write a test that
// Visits https://example.cypress.io/commands/actions

// Types your email into the .action-email input

// Checks a checkbox with .action-checkbox

// Selects “apples” from a select dropdown .action-select

// Submits a form if available (or clicks a submit button)

// Asserts that the email input has the correct value

cy.visit("https://example.cypress.io/commands/actions");
cy.get(".action-email").type("test@test.pl");
cy.get(".action-checkbox").check();
cy.get(".action-select").select("apples");
cy.get("form").submit();
cy.get(".action-email").should("have.value", "test@test.pl");
