export class DashboardPage {
    DashboardPage() {

    }
    assertDashboardText() {
        if (!cy.get('.actwve').should('be.visible')) {
            throw new Error('Login Failed');
        }
    }
}
