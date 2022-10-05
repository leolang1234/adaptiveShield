import { BambelloMenuFunctions } from "../../applicationLibrary/functionLibrary/BambelloMenuFunctions"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const bambelloMenuFunctions = new BambelloMenuFunctions()

Then('Menu should be open', () => {
    bambelloMenuFunctions.verifyMenuIsOpen()
})

When('user open search cards option', () =>{
    bambelloMenuFunctions.clickSearchTasksOption()
}) 

Then('clear search box',() => {
    bambelloMenuFunctions.clearSearchTasksInputBox()
})

Then('set value in search box {string}', (value) => {
    bambelloMenuFunctions.setValueInSearchTasksInputBox(value)
})

Then('user close the menu',() => {
    bambelloMenuFunctions.clickCloseMenuButton()
})