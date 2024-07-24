//<reference types="Cypress"/>
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('ACMElogin', (username, password) => { 
   cy.get("input[id='username']").type("admin");
   cy.get("input[id='password']").type("admin123");
   cy.get("[id='log-in']").click();
});
Cypress.Commands.add('HRMlogin', (username, password) => { 
    cy.get('input[placeholder="Username"]').type(username);
    cy.get("input[Placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('have.text','Dashboard')
 });
//commands for the site https://www.saucedemo.com/
 Cypress.Commands.add('SwagLabslogin', (username, password) => { 
    cy.get('input[placeholder="Username"]').type(username);
    cy.get("input[Placeholder='Password']").type(password);
    cy.get(".submit-button").click();
    cy.get(".app_logo").should('have.text','Swag Labs')
 });



