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
  