/* eslint-disable no-undef */

beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  
  describe("Signup", () => {
cy.visit("http://localhost:3000/login")
      cy.get('#email').type('user1')
      cy.get('#password').type('test1')
      cy.get('.btn').click() 
      cy.url().should('include', '/movies')  
})