export default url => ({
    elements: {
        menuButton: `[aria-label="menu"]`,
        subscribeButton: `[href="/newsletters"]`,
        emailFile: `#mce-EMAIL`,
        checkBox_1: 'input[id="mce-group[4553]-4553-0"]',
        subscribe: 'input[value="Subscribe"]'
    },

    navigate() {
        cy.visit(url);
    },

    goToSubscribePage() {
        cy.get(this.elements.menuButton).click();
        cy.get(this.elements.subscribeButton).click();
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