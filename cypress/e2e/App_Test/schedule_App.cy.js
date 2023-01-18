/// <reference types="cypress"/>

import schedulePageFactoryApp from "../../support/schedulePage_App"

/**
 * This test is to test the schedule. determine show the correct date on the app browser.
 */
describe("Test schedule page", () => {

    const schedulePageApp = schedulePageFactoryApp("/#");

    beforeEach(() => {
        cy.viewport(375, 667);
        schedulePageApp.navigate();
    })

    it("test sechedule page", () => {
        schedulePageApp.gotoSchedulePage();

        //assert: check the first date of the schedule
        cy.get(schedulePageApp.elements.dayButton).should("contain", schedulePageApp.getDate());
    })
})