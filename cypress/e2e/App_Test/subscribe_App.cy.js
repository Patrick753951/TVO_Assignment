/// <reference types="cypress"/>

import subscribePageFactoryApp from "../../support/subscribePage_App"
import testData from "../../fixtures/subscribeTestData.json";

/**
 * this test is to test the subscribe function on app browser
 */
describe("subscribe page", () => {

    const subscribePageApp = subscribePageFactoryApp("/#");

    beforeEach(() => {
        cy.viewport(375, 667);
        subscribePageApp.navigate();
        
    })

    for (const data in testData){
        it.only("sunscribe page test", () => {
            subscribePageApp.goToSubscribePage();
            
            cy.log(testData[data].log);

            //input the email
            subscribePageApp.inputEmail(testData[data].email + "{enter}");

            //determine wether select the option
            if(testData[data].select)
                subscribePageApp.selectNewsletters();

            subscribePageApp.subscuribe()

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