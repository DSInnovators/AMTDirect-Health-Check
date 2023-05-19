export class LoginPage {
    LoginPage() {

    }
    visitPageQA(url) {
        cy.visit(url)
    }
    setUserName(userName) {
        cy.get('#txtUSER_NAME').type(userName)
    }
    setPassword(password) {
        cy.get('#txtPassword').type(password)
    }
    setClientNumber(clientNumber) {
        cy.get('#txtClient_Number').type(clientNumber)
    }
    clickSubmit() {
        cy.get('.pull-right > .btn').click()
    }
}