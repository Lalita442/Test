describe('Gmail Login', () => {
    it('types into the email box and submits the form', () => {
      cy.visit('https://www.google.com').click();
      cy.clearAllLocalStorage();
      cy.frameLoaded(`iframe[id^="Your project: 'Test Project'"]`); //check iframe Load

      cy.get('[href="https://mail.google.com/mail/?tab=rm&ogbl"]').click();
      // // Visit Gmail
      // cy.visit('https://mail.google.com');
  
      // Handle login using cy.origin for cross-origin testing
      cy.origin('https://accounts.google.com', () => {
        // Get the email input box and type a query
        cy.get('input[type="email"]').type('your-email@gmail.com');
        cy.get('#identifierNext').click();
  
        // Wait for the password field to be visible
        cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible');
      });
    });
  });
  