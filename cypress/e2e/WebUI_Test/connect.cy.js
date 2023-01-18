/// <reference types="cypress"/>

import connectPageFactory from "../../support/connectPage";

/**
 * this test is to test transfer to connect page.
 */
describe("test transfer to other page", () => {
    const connectPage = connectPageFactory("/#");

    beforeEach(() => {
        cy.viewport("macbook-16");
        connectPage.navigate();
    })

    //test connect in the same tab
    it("open in same tab", () => {
        connectPage.goToMastheadPage();
        cy.location("pathname").should("contain", "masthead");
        
        //assert：check the page contain the certain info.
        cy.contains("div > h1", "Masthead").should("contain", "Masthead");
    })

    //test connect in the other tab
    it("open in other tab", () => {       
        connectPage.goToCareerPage();
        
        cy.origin('https://tvo.me/work-with-us/#join', () => {
            //assert：check the page contain the certain info.
            cy.contains("div > h1", "Work with us").should("contain", "Work with us");
        })
    })
})