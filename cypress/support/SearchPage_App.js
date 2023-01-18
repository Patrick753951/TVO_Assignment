export default url => ({
    elements: {
        menuButton: `[aria-label="menu"]`,
        inputButton: '[placeholder="Search..."]'
        
    },

    navigate() {
        cy.visit(url);
    },

    goToSearchPage() {
        cy.get(this.elements.menuButton).click();
    },

    setSearchValue(values){
        cy.get(this.elements.inputButton).type(values);
    }
})