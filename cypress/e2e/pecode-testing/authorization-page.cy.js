import utils from '../../support/test-utils'

describe('Authorization page', () => {
    const customBeforeAll = beforeEach(() => {
        cy.visit(`${Cypress.env('URL')}`)
        cy.log(`The auth page has to be opened`)
    })
    utils.setBeforeAllAndAfterAll(customBeforeAll)

    it('Authorization by an existing user', () => {
        // you must be logged to auth page for using next cy.authUser function | we did it in before function
        cy.authUser(Cypress.env('USER'), Cypress.env('PASSWORD'))
        // The test will fail because I have no accounts for an existing user

        // --------
        // here we can continue to test some func
        // --------
       })

    it('Authorization by non-registered user', () => {
        // Logging in with a random set of characters, there should definitely not be such a user :)
        cy.authUser(utils.randomString(8, true), utils.randomString(8))

        // Verification of, we received a pop-up message that the user was not found
        cy.get(`[class="form-group has-error"]`).contains(utils.loginPopupErrors.notFoundUser)

    })

    it('Authorization page. Pop-up errors', () => {

        // emptyUsername
        cy.get(`input[type="text"]`).should('be.visible').clear()
        cy.get(`input[type="password"]`).should('be.visible').clear().type(utils.randomString(8))
        cy.get(`input[type="submit"]`).should('be.visible').click()
        cy.get(`input[type="text"]`).next().contains(utils.loginPopupErrors.emptyUsername)

        // emptyPassword
        cy.get(`input[type="text"]`).should('be.visible').clear().type(utils.randomString(8))
        cy.get(`input[type="password"]`).should('be.visible').clear()
        cy.get(`input[type="submit"]`).should('be.visible').click()
        cy.get(`input[type="password"]`).next().contains(utils.loginPopupErrors.emptyPassword)

        // emptyPassword & emptyUsername
        cy.get(`input[type="text"]`).should('be.visible').clear()
        cy.get(`input[type="password"]`).should('be.visible').clear()
        cy.get(`input[type="submit"]`).should('be.visible').click()
        cy.get(`input[type="text"]`).next().contains(utils.loginPopupErrors.emptyUsername)
        cy.get(`input[type="password"]`).next().contains(utils.loginPopupErrors.emptyPassword)

    })

})
