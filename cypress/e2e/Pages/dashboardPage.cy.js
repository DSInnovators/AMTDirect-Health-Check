export class DashboardPage {
    DashboardPage() {

    }
    assertDashboardText() {
        if (!cy.get('.acteve').should('be.visible')) {
            throw new Error('Login Failed');
        }
    }
}
