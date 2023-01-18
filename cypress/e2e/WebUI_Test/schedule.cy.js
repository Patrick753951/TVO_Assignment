/// <reference types="cypress"/>

import schedulePageFactory from "../../support/schedulePage"

/**
 * This test is to test the schedule. determine show the correct date on the web browser.
 */
describe("Test schedule page", () => {

    const schedulePage = schedulePageFactory("/#");

    beforeEach(() => {
        cy.viewport("macbook-16");
        schedulePage.navigate();
    })

    it("test sechedule page", () => {
        schedulePage.gotoSchedulePage();

        //assert: check the first date of the schedule
        cy.get(schedulePage.elements.dayButton).eq(1).children().eq(1).should("contain", schedulePage.getDate());
    })
})