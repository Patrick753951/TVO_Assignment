/// <reference types="cypress"/>

import SearchPageFactory from "../../support/SearchPage"
import testData from "../../fixtures/searchTestData.json"

/**
 * this test is to test the search function on the web browser.
 * it use two data
 * 1. valid input
 * 2. invlaid input
 */
describe("search page", () => {
    const SearchPage = SearchPageFactory("/#");

    beforeEach(() => {
        cy.viewport("macbook-16");
        SearchPage.navigate();
    })

    for (const data in testData){
        it.only("search function test", () => {
            SearchPage.goToSearchPage();
            SearchPage.waitUntilVisible();

            cy.log(testData[data].log);
            SearchPage.setSearchValue(testData[data].input);
            SearchPage.submit();
            
            //assert: check the search result. does it found result.
            cy.get('p').eq(0).should("contain", testData[data].assert);
        }) 
    }
})