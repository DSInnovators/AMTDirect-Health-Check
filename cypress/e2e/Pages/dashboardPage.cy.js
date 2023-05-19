export class DashboardPage {
    DashboardPage() {

    }
    assertDashboardText() {
        if (!cy.get('.active').should('be.visible')) {
            throw new Error('Login Failed');
        }
    }
}
