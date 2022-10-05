import BambelloHomePageObjects from "../objectLibrary/BambelloHomePageObjects";

const bambelloHomePageObjects = new BambelloHomePageObjects()

export class BambelloHomePageFunctions {

    openUrl() {
        cy.visit('/')
    }

    clickOnShowMenuButton(){
        bambelloHomePageObjects.getShowMenuButton().click()
    }

    getActualResults(){
        return bambelloHomePageObjects.getSearchResults()
    }

    clearSearchResults(){
        bambelloHomePageObjects.getClearSearchResultsButton().click()
    }
    
    addAnotherList(){
        bambelloHomePageObjects.getAddAnotherListButton().click()
    }

    clickAddNewCard(){
        bambelloHomePageObjects.getAddAnotherCardToBackLogButton().click()
    }
    setNewCardTitle(value){
        bambelloHomePageObjects.getNewCardTitleInputBox().type(value)
    }

    saveNewCard(){
         bambelloHomePageObjects.getAddCardButton().click()
    }

    openCardByName(value){
         bambelloHomePageObjects.getCardByName(value).click()
    }
    archiveCard(){
        bambelloHomePageObjects.getArchiveButton().click()
    }

    closeCard(){
        bambelloHomePageObjects.getArchiveButton()
        bambelloHomePageObjects.getCloseCardButton().click()
    }
}