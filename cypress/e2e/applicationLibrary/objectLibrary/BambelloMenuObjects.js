export default class BambelloMenuObjects{

    getMenu(){
        return cy.get('.pop-over')
    }
    getMenuTitle(){
        return cy.get('h3')
    }

    getCloseMenuButton(){
        return cy.get('.clean-btn > .MuiSvgIcon-root')
    }

    getMenuSearchTasksOption(){
        return cy.contains("Search cards")
    }

    getSearchTasksTitle(){
        return cy.get('h3')
    }

    getSearchTasksInputBox(){
        return cy.get('.pop-over-input')
    }
}