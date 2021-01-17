beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  
  describe("Signup", () => {
    it("Should successfully sign up user and change to a movies page", () => {
      cy.get('#email').type('newaccount' + val + '@gmail.com')    //Adds the 4 digit value between newaccount and @gmail.com
      cy.get('#password').type('123456')
      cy.get('#password-confirm').type('123456')
      cy.get('.btn').click() 
      cy.url().should('not.include', '/signup')
      
    });
  });
  