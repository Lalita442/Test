describe ('Pracitice',()=>
{
    it ('first assertion to check',function()
    {
        cy.visit("http://opensource-demo.orangehrmlive.com")
        cy.contains("OrangeHRM")
        cy.title().should('eq','OrangeHRM')
    }
    )
    it ('second assertion to check-intended to fail',function()
        {
            cy.visit("http://opensource-demo.orangehrmlive.com")
            cy.contains("OrangeHRM")
            cy.title().should('eq','OrangeHRM123')
        }
        )
}
)