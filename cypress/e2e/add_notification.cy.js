import {LoginPage} from "../pageObjects/LoginPage";
import {Notification} from "../pageObjects/Notification";


describe('add notification', () => {

  const loginPage = new LoginPage();
  const notification = new Notification();
  it('Authorized to page client', () => {
    
    loginPage.doLogin();
    cy.url().should('include', 'clients');

    //notification.clickNotification().contains('Уведомления').click();
    //cy.url().should('eq', 'http://167.114.201.175:5000/notifications');
    //notification.addNotificationButton().click({ force: true });
    //cy.wait(1000);
    notification.doNotification();

    notification.newMessage().type('Alina'); 
//    Notification.textField().type('Alina'); 
   //cy.get('.crm-navigation__item').contains('Уведомления').click();
   //cy.wait(1000);

//   cy.url().should('eq', 'http://167.114.201.175:5000/notifications');
  // cy.wait(1000);
  // cy.contains('Добавить новое уведомление').should('be.visible');
  // cy.wait(1000);
   //cy.contains('Добавить новое уведомление').click({ force: true });
  //cy.wait(1000);
//   cy.get('.push-modal-form__heading').contains('Новое сообщение');
  // cy.wait(1000);
    // Type into the input field for the message subject
    //cy.get('.push-modal-add-title input').type('Alina');
    //cy.wait(1000);
    //cy.get('.push-modal-form__heading').contains('Текс сообщения');
    //cy.wait(1000);
    //cy.get('.push-modal-preview__text').eq(1).type('Alina');
    //cy.wait(1000);  

    // Interact with the datepicker
    cy.get('.push-modal-date input').click(); // Click to open the datepicker
    cy.wait(1000);
    cy.get('.ui-datepicker-calendar tbody td:not(.ui-datepicker-other-month)').first().click(); // Select the first day (adjust as needed)
    cy.wait(1000);

  //  cy.on('window:alert', (str) => {
    //  expect(str).to.include('Дата отправки не может быть меньше текущей');
    //});
    //cy.get('.mat-select').click(); // Click to open the dropdown

    ///Notification.newDropdown.click()
    //Notification.newSMSclick().contains('SMS').click(); // Select an option (assuming 'SMS' is an optioni)
    cy.wait(1000);

    // Click on "Группа пользователей" to open the dropdown
    cy.get('.push-modal-select-group__heading').click();
    cy.wait(1000);


    cy.get('.push-col-save').click();
    cy.wait(1000);

   // Close the modal
   cy.get('.push-close-modal__button').click(); 
   
   cy.url().should('eq', 'http://167.114.201.175:5000/notifications');
  

  });

});