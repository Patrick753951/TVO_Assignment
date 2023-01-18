/// <reference types="cypress"/>

import videoPageFactory from "../../support/videoPage";

/**
 * this test is to test from page transfer to video play page on web browser.
 */
describe("test watch video", () => {
    const videoPage = videoPageFactory("/#");

    beforeEach(() => {
        cy.viewport("macbook-16");
        videoPage.navigate();
    })

    it("play video at main page", () => {
        videoPage.goToVideoPage();
        videoPage.gotoPlayVideo();

        //assert: check the video link
        cy.location("pathname").should("contain", "video");
    })
})