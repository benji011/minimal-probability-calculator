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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
require("cypress-xpath");
Cypress.Commands.add("getByDataCy", (query) => cy.get(`[data-cy="${query}"]`));

Cypress.Commands.add("moveSlider", (sliderXPath, x, y) =>
  cy
    .xpath(`${sliderXPath}`)
    .trigger("mousedown", { which: 1 }, { force: true })
    .trigger("mousemove", parseInt(`${x}`), parseInt(`${y}`), { force: true })
    .trigger("mouseup")
);
