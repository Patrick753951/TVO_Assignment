export default url => ({
    elements: {
        careerText: "Careers",
        careerLink: "a > p",
        mastheadText: "Masthead",
        mastheadLink: "a > p",
        linkQuery: "#root > footer > div:nth-child(1) > div:nth-child(1) > :nth-child(3) > ul > li:nth-child(15) > a"
    },

    navigate() {
        cy.visit(url);
    },

    goToCareerPage() {
        cy.contains(this.elements.careerLink, this.elements.careerText).parent().invoke("removeAttr", "target").click();
    },

    goToMastheadPage(values){
        cy.contains(this.elements.mastheadLink, this.elements.mastheadText).parent().click()
    },

    getLink(){

    }
})