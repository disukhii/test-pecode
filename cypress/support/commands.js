
Cypress.Commands.add('authUser', (user, password) => {

    cy.url().should('include', 'registerlogin.php');
    cy.log(`The authorization page has to be opened`)

    // Type user field
    cy.get(`input[type="text"]`).should('be.visible').clear()
        .type(user).should('have.value', `${user}`)

    // Type password field
    cy.get(`input[type="password"]`).should('be.visible').clear()
        .type(`${password}`)

    // click on 'login' button
    cy.get(`input[type="submit"]`).should('be.visible').click()

    // a simple example of how this would work
})