/// <reference types="cypress"/>

/**
 * test the api request for schedule page
 */
describe("Schedule API test", () => {

    
    it("schedule API test", () =>{

        cy.log("test schedule API");

        cy.request({
            method: "post",
            url: "https://jssdks.mparticle.com/v3/JS/us1-5d45c2d425f4d1409e39e4393f9fa076/events",
            body: {
                "source_request_id": "095bee86-4e4d-420c-8f0d-1578b506fdb7",
                "mpid": "237667319162452936"
                }
            
        }).then(response => {
            //chenck the returun status,it must be 202
            expect(response.status).to.be.equal(202)
        })
    })
    
})