import { LoginPage } from "../Pages/LoginPage.cy";
const loginPage = new LoginPage();
export class LoginTestRunner {
    LoginTestRunner() {

    }
    doLoginCorrect(url, amt_pass) {

        var loginCredFileName = 'cypress/fixtures/loginCredentials.json'

        loginPage.visitPageQA(url)

        cy.readFile(loginCredFileName).then((loginCred) => {
            loginPage.setUserName(loginCred[0].userName);
            loginPage.setPassword(amt_pass);
            loginPage.setClientNumber(loginCred[0].clientNum);
            loginPage.clickSubmit();
        })



    }
}
