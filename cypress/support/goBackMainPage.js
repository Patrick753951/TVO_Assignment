export default url => ({
    elements: {
        navigateButton: "span > img"
    },

    navigate() {
        cy.visit(url);
    },

    goToMainPage() {
        cy.get(this.elements.navigateButton).click();
    }
})