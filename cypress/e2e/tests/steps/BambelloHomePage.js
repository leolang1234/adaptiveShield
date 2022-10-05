import { BambelloHomePageFunctions } from "../../applicationLibrary/functionLibrary/BambelloHomePageFunctions"
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const bambelloHomePageFunctions = new BambelloHomePageFunctions()

Given('user opens the bambello tasks site', ()=> {
    bambelloHomePageFunctions.openUrl()
})

When('user clicks on show menu button', () => {
    bambelloHomePageFunctions.clickOnShowMenuButton();
})

Then('search results is {string}', (value) => {
    bambelloHomePageFunctions.getActualResults().should('have.text',value)
})

Then('user clears search results', () => {
    bambelloHomePageFunctions.clearSearchResults()
})

And('user adds a task with the name {string}', (value) => {
    bambelloHomePageFunctions.clickAddNewCard()
    bambelloHomePageFunctions.setNewCardTitle(value)
    bambelloHomePageFunctions.saveNewCard()
})

And('user opens card {string}', (value) => {
    bambelloHomePageFunctions.openCardByName(value)
})

And('user achives card', () => {
    bambelloHomePageFunctions.archiveCard()
})

And('user close card',() => {
    bambelloHomePageFunctions.closeCard()
})