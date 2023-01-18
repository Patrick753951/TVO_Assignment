/// <reference types="cypress"/>

import categoryPageFactory from "../../support/categoryPage";

/**
 * this test is to test transfer to special category on the app browser.
 * 1. from the category bar.
 * 2. from the category title
 */

describe("test category", () =>{

    const category = categoryPageFactory("/#");

    beforeEach(() => {
        cy.viewport("macbook-16");
        category.navigate();
    })

    /**
     * through the category bar.
     */
    it("trasfer to cagetory with bar", () => {
        category.transferWithCategoryBar();
        //assert: chenck the URL
        cy.location("pathname").should("contain", "browse/categories/TVO%2BOriginals")
    })

    /**
     * through the category title.
     */
    it("trasfer to cagetory with title", () => {
        category.transferWithCategoryTtile();
        //assert: chenck the URL
        cy.location("pathname").should("contain", "browse/categories/TVO+Originals")
    })
})