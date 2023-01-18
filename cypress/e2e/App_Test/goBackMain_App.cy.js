/// <reference types="cypress"/>

import goBackMainPageFactory from "../../support/goBackMainPage";

/**
 * this test is test the link go back to the main page on the web browser.
 */
describe("go back to main page", () => {
    const goBackMainPage = goBackMainPageFactory("/#");

    beforeEach(() => {
        cy.viewport(375, 667);
        goBackMainPage.navigate();
    })

    it("go back to main page", () => {
        goBackMainPage.goToMainPage();
        //assert: check the URL
        cy.location("pathname").should("contain", "/");
    })
})