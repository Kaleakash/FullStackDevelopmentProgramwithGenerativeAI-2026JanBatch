/// <reference types="cypress" />

describe('login app', () => {
 
 beforeEach(() => {
    cy.visit('http://localhost:3000/login.html')
  })



  it('can add new todo items', () => {
    cy.get('#emailId').type(`akash@gmail.com`)
    cy.get('#password').type(`abc@123`)
    cy.get('#b1').click();
    cy.contains('Welcome to Home Page')
  })


})
