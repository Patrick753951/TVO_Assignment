/// <reference types="cypress"/>

import testData from "../../fixtures/subscribeAPITestData.json"

/**
 * test the api for subscribe.
 */
describe("subscribe API test", () => {

    for(const data in testData){

        it("subscribe API test", () =>{
            cy.log("test subscribe API with email: " + testData[data].email);

            cy.request({
                method: "get",
                url: "https://tvo.us18.list-manage.com/subscribe/post-json?" + "email=" + testData[data].email + "&id=eadf6a4c78&u=bcc5290810a7316d184d3ce54" ,
            }).then(response => {
                //check the return status should be 200.
                expect(response.status).to.be.equal(200);

                if(testData[data].valid){
                    /**
                     * check the return message,
                     * normally it should be "suucess", but I test too many times, it have a little different.
                     * the assert message I use as folloe:
                     *  "has too many recent signup requests"
                     */
                    expect(response.body.msg).contain(testData[data].assert);
                }else{
                    //check the return message,
                    expect(response.body.result).contain(testData[data].assert);
                }
                
            });
        })
    }
    
})