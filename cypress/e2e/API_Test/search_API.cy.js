/// <reference types="cypress"/>

import testData from "../../fixtures/searchTestData.json"

/**
 * test the search api
 * it have two input, one is valid, another one is invalid
 */
describe("search API test", () => {

    for(const data in testData){
        it("search API test", () =>{

            cy.log("search for: " + testData[data].input);

            cy.request({
                method: "get",
                url: "https://search-api.swiftype.com/api/v1/public/engines/search.json",
                body: {
                    q : testData[data].input,
                    title: "Search Results", 
                    engine_key: "aBsuBkeq84LGLQsYdWMV",
                    page: 1,
                    per_page: 10
                    }
            }).then(response => {
                //check the return status should be 200.
                expect(response.status).to.be.equal(200)
                if(testData[data].api_assert_greatThan_0){
                    //check the return body ,the reuslt found should be great than 0. it means found the result.
                    expect(response.body.info.page.total_result_count).to.be.greaterThan(0);
                }else{
                    //check the return body ,the reuslt found should be 0. it means not found the result.
                    expect(response.body.info.page.total_result_count).to.be.equal(0);
                }
                
            })
        })
    }
})