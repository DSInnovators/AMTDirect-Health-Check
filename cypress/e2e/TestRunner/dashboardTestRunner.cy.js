import { DashboardPage } from "../Pages/dashboardPage.cy";
const dashboardPage = new DashboardPage()
export class DashboardRunner {
    DashboardRunner() {

    }
    assertDashboard() {
        dashboardPage.assertDashboardText()
    }
}
