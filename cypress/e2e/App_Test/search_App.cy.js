/// <reference types="cypress"/>

import SearchPageFactoryApp from "../../support/SearchPage_App"
import testData from "../../fixtures/searchTestData.json"

/**
 * this test is to test the search function on the app browser.
 * it use two data
 * 1. valid input
 * 2. invlaid input
 */
describe("search page", () => {
    const SearchPageApp = SearchPageFactoryApp("/#");

    beforeEach(() => {
        cy.viewport(375, 667);
        SearchPageApp.navigate();
    })

    for (const data in testData){
        it.only("search function test", () => {
            SearchPageApp.goToSearchPage();

            cy.log(testData[data].log);
            SearchPageApp.setSearchValue(testData[data].input + "{enter}");

            //assert: check the search result. does it found result.
            cy.get('p').eq(0).should("contain", testData[data].assert);
        }) 
    }
})