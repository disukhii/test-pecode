
function setBeforeAllAndAfterAll(customBeforeAll, customAfterAll) {
    if(!customBeforeAll){
        before(() => {
            // Open Auth page
            cy.visit(`${Cypress.env('URL')}`)
            cy.log(`The auth page has to be opened`)
        })
    } else { customBeforeAll() }
    if(!customAfterAll){
        after(() => {
            // some clean up by default
        })
    } else { customAfterAll() }
}
const loginPopupErrors = {
    emptyUsername: 'Please enter username.',
    emptyPassword: 'Please enter your password.',
    notFoundUser: 'No account found with that username.',
    incorrectPwd: 'Incorrect password.'

}
function randomString(length, email = false) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (email) result += '@gmail.com'
    return result;
}

module.exports = { randomString, loginPopupErrors, setBeforeAllAndAfterAll }