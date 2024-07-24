describe ('assertions demo',()=>{
    it ('implicit assertions',()=>{

/*cy.visit("https://www.google.com")
cy.url().should('include','google')
cy.url().should('eq','https://www.google.com/')
cy.url().should('contain','google')*/

cy.visit("https://www.google.com")
cy.url().should('include','google')
.and('eq','https://www.google.com/')
.and('contain','google')

//should and  are the implict assertions

//below are the explict assertions -- except and assert
})
it ('explict assertions',()=>{
    cy.visit("https://www.google.com")
    cy.get()

})

})