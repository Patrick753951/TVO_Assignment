export default url => ({
    elements: {
        watchVideoText: "Watch Now",
        watchVideoLink: "a>span",
    },

    navigate() {
        cy.visit(url);
    },

    goToVideoPage() {
        cy.contains(this.elements.watchVideoLink, this.elements.watchVideoText).click();
    },

    gotoPlayVideo(values){
        cy.contains(this.elements.watchVideoLink, this.elements.watchVideoText).click();
    }
})