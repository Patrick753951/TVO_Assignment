export default url => ({
    elements: {
        navigateButton: `a[href='/newsletters']`,
        searchButton: `[aria-label="search"]`,
        emailFile: `[id="mce-EMAIL"]`,
        checkBox_1: '[id="mce-group[4553]-4553-0"]',
        subscribe: 'input[value="Subscribe"]'
    },

    navigate() {
        cy.visit(url);
    },

    waitUntilVisible() {
        cy.get(this.elements.emailFile).should('be.visible');
    },

    goToSubscribePage() {
        cy.get(this.elements.navigateButton).eq(0).click();
    },

    inputEmail(value) {
        cy.get(this.elements.emailFile).type(value);
    },

    selectNewsletters() {
        cy.get(this.elements.checkBox_1).check();
    },

    subscuribe(){
        cy.get(this.elements.subscribe).click();
    }
})