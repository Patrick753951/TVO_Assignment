export default url => ({
    elements: {
        categoryString: "TVO Originals",
        categoryBar: "button>span",
        titleBar: "div>a"
    },

    navigate() {
        cy.visit(url);
    },

    transferWithCategoryBar(){
        cy.contains(this.elements.categoryBar, this.elements.categoryString).parent().click();
    },

    transferWithCategoryTtile(){
        cy.contains(this.elements.titleBar, this.elements.categoryString).click();
    }
})