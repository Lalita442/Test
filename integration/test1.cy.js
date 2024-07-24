describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://www.freshworks.com/')
        cy.contains('IT Services')
        cy.contains('IT Services')
        cy.contains('IT Services').click()
    })
  })