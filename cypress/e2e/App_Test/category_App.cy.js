/// <reference types="cypress"/>

import categoryPageFactoryApp from "../../support/categoryPage_App";

/**
 * this test is to test transfer to special category on the web browser.
 * 1. from the category bar.
 * 2. from the category title
 */
describe("test category", () =>{

    const categoryPageApp = categoryPageFactoryApp("/#");

    beforeEach(() => {
        cy.viewport(375, 667);
        categoryPageApp.navigate();
    })

    /**
     * through the category bar.
     */
    it("trasfer to cagetory with bar", () => {
        categoryPageApp.transferWithCategoryBar();
        //assert: chenck the URL
        cy.location("pathname").should("contain", "browse/categories/TVO%2BOriginals")
    })

    /**
     * through the category title.
     */
    it("trasfer to cagetory with title", () => {
        categoryPageApp.transferWithCategoryTtile();
        //assert: chenck the URL
        cy.location("pathname").should("contain", "browse/categories/TVO+Originals")
    })
})