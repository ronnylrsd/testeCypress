const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add('irAoAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})