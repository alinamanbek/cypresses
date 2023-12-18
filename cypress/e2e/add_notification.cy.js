import {LoginPage} from "../pageObjects/LoginPage";
import {Notification} from "../pageObjects/Notification";
import {Search} from "../pageObjects/Search";

describe('add notification', () => {

  
  const loginPage = new LoginPage();
  const notification = new Notification();
  const searchPage = new Search();
  it('Authorized to page client', () => {
    //login
    loginPage.doLogin();
    cy.url().should('include', 'clients');
    //add notification
    notification.doNotification();
    //send notification
    cy.get('.push-close-modal__button').click();
  
    //search
    searchPage.doSearch('Salima');


  });

});