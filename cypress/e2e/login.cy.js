import {LoginPage} from "../pageObjects/LoginPage";


describe('Login Suite', () => {
const loginPage = new LoginPage();

  it('Authorized to page and client', () => {
    
    loginPage.doLogin();
    cy.url().should('include', 'clients');
  });



  // it(' Not Authorized to page clients', () => {
 
  //   loginPage.doLogin('Invalid','Admin@Navi');
  //   cy.url().should('include', 'login');  
  // });



  // it(' Not Authorized to page clients', () => {

  //   loginPage.doLogin('Admin','Invalid');

  //   cy.url().should('include', 'login');  
  //   // Visit the main page
  //   cy.visit('http://167.114.201.175:5000/');

  //   // Enter login credentials and submit the form
  //   cy.wait(1000);
  //   cy.get('input[name="userName"]').type('Admin');
  //   cy.wait(1000);
  //   cy.get('input[name="password"]').type('Invalid');
  //   cy.wait(1000);
  //   cy.get('button[type="submit"]').click();
  //   cy.wait(1000);

  //   cy.url().should('include', 'login');//expects asserts
  //   cy.wait(1000);
  
  // });



});