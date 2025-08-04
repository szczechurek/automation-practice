//cy.type()-typing into inputs. Use this to simulate typing next into input fields
cy.get('input[name="email"]').type("test@example.com");

//cy.click()-clicking buttons or other clickable elements
cy.get("button.submit").click();

//cy.check()/cy.uncheck()-for checkboxes and radio buttons
cy.get('input[type="checkbox"]').check();
cy.get('input[type="checkbox"]').uncheck();

//cy.select()-selecting an option from a dropdown
cy.get("select#country").select("Polnad");

//cy.submit()-submit a form
cy.get("form#loginForm").submit();

//Assertions: should() and expect()

// .should() - to make assertions directly on Cypress chains:
cy.get(".message").should("contain", "Success");
cy.get("input").should("have.value", "test@example.com");

// .expect() - inside .then() for more complex assertions
cy.get("input").then(($input) => {
  expect($input.val()).to.equal("test@example.com");
});

//Wating strategies

//cy.wati() - wait for fixed time
cy.wait(1000); //waits 1 second

//cy.intercept() - intercepted and wait for network calls
cy.intercept("GET", "/api/users").as("getUsers");
cy.wait("@getUsers").its("response.statusCode").should("eq", 200);
