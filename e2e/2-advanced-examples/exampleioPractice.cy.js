describe("Querying the exampleio site",()=>{
    it("Tesitng the button",()=>{
        cy.visit("https://example.cypress.io/commands/querying");
        cy.get('#query-btn').should('contain', 'Button')

cy.get('.query-btn').should('contain', 'Button')

cy.get('#querying .well>button:first').should('contain', 'Button')
    })
})