describe ('Css Selector',()=> 
{
     it ("first selector", ()=>
{
    cy.visit("https://www.amazon.com/")
    cy.get("#twotabsearchtextbox").type('Tshirts{enter}')

})
})