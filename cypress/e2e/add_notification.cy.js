import {LoginPage} from "../pageObjects/LoginPage";
import {Notification} from "../pageObjects/Notification";


describe('add notification', () => {

  const loginPage = new LoginPage();
  const notification = new Notification();
  it('Authorized to page client', () => {
    //login
    loginPage.doLogin();
    cy.url().should('include', 'clients');
    //add notification
    notification.doNotification();
    //send notification
    cy.get('.push-close-modal__button').click();
    
  
    


  });

});