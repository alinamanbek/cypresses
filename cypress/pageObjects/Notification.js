// cypress/support/pageObjects/MainPage.js

export class Notification{

    clickNotification() { return cy.get('.crm-navigation__item').contains('Уведомления').click();}
    addNotificationButton() { return cy.contains('Добавить новое уведомление').click({ force: true });}
    newMessage(){return cy.get('.push-modal-form__heading').contains('Новое сообщение');}
    //titleField(){return  cy.get('.push-modal-add-title input')} 
    textField(){return cy.get('.push-modal-form__heading').contains('Текс сообщения')}
    
    newDropdown() {return   cy.get('.mat-select').click();}
    newSMSclick(){return     cy.get('.mat-option').contains('SMS').click();}



    doNotification(){
        this.clickNotification().contains('Уведомления').click();  
        cy.url().should('eq', 'http://167.114.201.175:5000/notifications');
        cy.wait(1000);
        cy.contains('Добавить новое уведомление').should('be.visible');
        cy.wait(1000);
        this.addNotificationButton().click({ force: true });;
        cy.wait(1000);
      //  this.newMessage().contains('Новое сообщение');
     //   cy.wait(1000); 


      //  this.textField().contains('Текс сообщения');

        


    
    
    }
     
    
    }
    
    
    