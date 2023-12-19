
## Что такое Cypress
Cypress - это фреймворк для тестирования конечных точек веб-приложений. Он обеспечивает простоту и эффективность в написании и выполнении тестов для симуляции пользовательских взаимодействий в браузере.

## Установка зависимостей

```Install 
npm install 
npm install --save-dev cypress
```


## Структура проекта

file add_notification 
```
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
    //end


  });

});
```
## Page object
Page Object - это паттерн проектирования, который помогает структурировать и обеспечивать чистоту кода в автоматизированных тестах. В проекте используется подход с Page Object для лучшей организации и обслуживаемости кода.


file Notification.js


```
// cypress/support/pageObjects/MainPage.js

export class LoginPage{

  usernameField() {return cy.get ('input[name="userName"]');}
  passwordField() {return cy.get ('input[name="password"]');}
  loginButton()  {return cy.get ('button[type="submit"]');}

  doLogin(username="Admin",password="Admin@Navi"){
    cy.visit('http://167.114.201.175:5000/')
    this.usernameField().type(username);
    this.passwordField().type(password); 
    this.loginButton().click();
    cy.wait(2000);
  
  }
   
  
  }
   
```
file Notification.js
```
export class Notification {
  // Click on the 'Уведомления' link in the navigation
  clickNotification() { return cy.get('.crm-navigation__item').contains('Уведомления').click({ force: true });}
  // Click on the 'Добавить новое уведомление' button
  addNotificationButton() {return cy.contains('Добавить новое уведомление').click({ force: true });}
  // Check if the 'Новое сообщение' heading is visible
  isNewMessageVisible() {return cy.get('.push-modal-form__heading').contains('Новое сообщение').should('be.visible');}
  // Get the text field for the message
  getMessageTextField() {return cy.get('.push-modal-form__heading').contains('Текс сообщения');}
  // Open the dropdown for selecting notification type
  openNotificationTypeDropdown() {return cy.get('.mat-select').click();}
  // Select the 'SMS' option from the dropdown
  selectSMSOption() { return cy.get('.mat-option').contains('SMS').click();}
  // 



  doNotification() {
    this.clickNotification();
    cy.url().should('eq', 'http://167.114.201.175:5000/notifications');
    cy.contains('Добавить новое уведомление').should('be.visible');
    this.addNotificationButton();
  
    // Check if the 'Новое сообщение' heading is visible
    this.isNewMessageVisible();
  
    // Type into the input field for the message subject
    cy.get('.push-modal-add-title input').type('last_one');
    cy.wait(1000);
  
    // Check if the 'Текс сообщения' heading is visible
    cy.get('.push-modal-form__heading').contains('Текс сообщения').should('be.visible');
    cy.wait(1000);
  
    // Type into the input field for the message body
    cy.get('.push-modal-preview__text').eq(1).type('last_one');
    cy.wait(1000);
     // Select the 'SMS' option from the dropdown 
    this.openNotificationTypeDropdown();
    this.selectSMSOption();
    cy.wait(1000);

    // Interact with the datepicker
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const tomorrow = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    cy.get('.push-modal-date input').type(tomorrow);
  
    // Open the "Группа пользователей" dropdown
    cy.get('.push-modal-select-group__text').click();
    
    // Choose "Template name" from the dropdown
    cy.get('.push-modal-hidden-select__item').contains('Template name').click();
  
    // Check that "1 группы" is selected
    cy.get('.push-modal-hidden__selected').should('contain', '1 группы');
  
    // Click the icon associated with "Template name"
    cy.get('.material-icons').contains('done').click();
  
    // Continue with the rest of your notification creation steps
   
  


    // Click the save button
    cy.get('.push-col-save').should('be.visible').click();
    
    
    
    
    // Check for any additional errors or success messages
    cy.on('window:alert', (str) => {
      const errorData = JSON.parse(str);
      // Add more assertions as needed
    });

  }
  
}
  
```
file Search.js
```
export class Search {
    // Get the search input field
    getSearchInput() {
      return cy.get('.push-search-field__input');
    }
  
    // Perform the search by typing text and pressing Enter
    doSearch(searchText) {
      // Type the text into the search input field
      this.getSearchInput().type(searchText);
  
      // Press the Enter key (key code 13)
      this.getSearchInput().type('{enter}');
  
      // Add any additional assertions or actions you need after performing the search
      // For example:
      // cy.url().should('include', 'notifications');
    }
  }
   
```
## Тест кейсы
```
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
    //end

  });
```

## Как запускать тест кейсы

### Запустите Cypress
   ```bash
   npx cypress open
```

## gitignore
  Файл .gitignore используется для указания Git, какие файлы и папки должны быть проигнорированы при отслеживании изменений в репозитории. Ниже приведен пример базового файла  
 ```bash
node_modules/
cypress/videos
cypress/screenshots
js/*.jsg
```