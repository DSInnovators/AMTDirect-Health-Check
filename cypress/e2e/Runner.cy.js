import { LoginTestRunner } from "./TestRunner/LoginRunner.cy";
import { DashboardRunner } from "./TestRunner/dashboardTestRunner.cy";
import { Utils } from "./Utils/Utils.cy";
const loginRunner = new LoginTestRunner();
const dashboardRunner = new DashboardRunner;
describe('Environment Status', () => {
    it('QA', () => {
        cy.readFile('cypress/fixtures/urls.json').then((data) => {
            var amt_pass = Cypress.env("amt_password");
            loginRunner.doLoginCorrect(data[0], amt_pass)
            cy.wait(1000);
            dashboardRunner.assertDashboard()
        })

    })
    it('UAT', () => {
        cy.readFile('cypress/fixtures/urls.json').then((data) => {
            var amt_pass = Cypress.env("amt_password");
            loginRunner.doLoginCorrect(data[1], amt_pass)
            cy.wait(1000);
            dashboardRunner.assertDashboard()
        })
    })
    it('Production', () => {
        cy.readFile('cypress/fixtures/urls.json').then((data) => {
            var amt_pass = Cypress.env("amt_password");
            loginRunner.doLoginCorrect(data[2], amt_pass)
            cy.wait(1000);
            dashboardRunner.assertDashboard()
        })
    })
})
