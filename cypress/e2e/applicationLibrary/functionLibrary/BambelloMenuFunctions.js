import BambelloMenuObjects from "../objectLibrary/BambelloMenuObjects";

const bambelloMenuObjects = new BambelloMenuObjects()

export class BambelloMenuFunctions {

    verifyMenuIsOpen() {
        bambelloMenuObjects.getMenu()
        bambelloMenuObjects.getMenuTitle().should('have.text','Menu')
    }

    clickCloseMenuButton(){
        bambelloMenuObjects.getMenu().scrollTo("top")
        bambelloMenuObjects.getCloseMenuButton().click()
    }

    clickSearchTasksOption(){
        bambelloMenuObjects.getMenuSearchTasksOption().click()
    }

    setValueInSearchTasksInputBox(value){
        bambelloMenuObjects.getSearchTasksInputBox().type(value)
    }

    clearSearchTasksInputBox(){
        bambelloMenuObjects.getSearchTasksInputBox().clear()
    }
}