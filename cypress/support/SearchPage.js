export default url => ({
    elements: {
        navigateButton: `[aria-label="go to search page"]`,
        searchButton: `[aria-label="search"]`,
        searchFile: `[id="search-field"]`,
        
    },

    navigate() {
        cy.visit(url);
    },

    waitUntilVisible() {
        cy.get(this.elements.searchFile).should('be.visible');
    },

    goToSearchPage() {
        cy.get(this.elements.navigateButton).click();
    },

    setSearchValue(values){
        cy.get(this.elements.searchFile).type(values);
    },

    submit(){
        cy.get(this.elements.searchButton).click();
    }
})