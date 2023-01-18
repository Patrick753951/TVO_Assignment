/// <reference types="cypress"/>

import subscribePageFactory from "../../support/subscribePage"
import testData from "../../fixtures/subscribeTestData.json";

/**
 * this test is to test the subscribe function on web browser
 */
describe("subscribe page", () => {

    const subscribePage = subscribePageFactory("/#");

    beforeEach(() => {
        cy.viewport("macbook-16");
        subscribePage.navigate();
        
    })

    for (const data in testData){
        it.only("sunscribe page test", () => {
            subscribePage.goToSubscribePage();
            subscribePage.waitUntilVisible();
            
            cy.log(testData[data].log);

            //input the email
            subscribePage.inputEmail(testData[data].email);

            //determine wether select the option
            if(testData[data].select)
                subscribePage.selectNewsletters();
            subscribePage.subscuribe()

            //assert
            if(testData[data].valid){
                //this assert is to check the input email is valid
                cy.get("[id='mc-embedded-subscribe-form']>p").should("contain", testData[data].assert);
            }else{
                //this assert is to check the input email is invalid(just the number)
                cy.get("[id='mc-embedded-subscribe-form']>div>p").should("contain", testData[data].assert);
            }
        })
    }

    
})