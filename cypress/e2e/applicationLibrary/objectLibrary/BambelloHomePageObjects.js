export default class BambelloHomePageObjects{

    getShowMenuButton(){
        return cy.contains('Show Menu')
    }

    getSearchResults(){
        return cy.get('.board-filter-results > :nth-child(1)')
    }

    getClearSearchResultsButton(){
        return cy.get('.board-filter-results > .flex')
    }

    getAddAnotherCardToBackLogButton(){
        return cy.contains('Add another card')
    }

    getNewCardTitleInputBox(){
          return cy.get('[rows="1"]')
    }
    getAddCardButton(){
        return cy.get('.primary-btn')
    }

    getCardByName(value){
        return cy.contains(value)
    }

    getArchiveButton(){
        return cy.contains('Archive')
    }

    getArchiveTaskButton(){
        return cy.get('.card-details-archived > h3')
    }

    getCloseCardButton(){
        return cy.get('.close-window-btn')
    }


}