class LoginPage {
    selectorsList(){
        const selectors = {
           userNameField: '[name="username"]',
           passwordField: '[name="password"]',
           invalidDataAlert: '.MuiAlert-standard',
           signinButton: '[type="submit"]',
           checkMenuGrid: '.MuiPaper-root',
           userNameAlert: '#username-helper-text'
        }
   return selectors}
    accessLoginPage() {
        cy.visit('/signin')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signinButton).click()
    }

    checkMenuPage(){
        cy.get(this.selectorsList().checkMenuGrid).should('be.visible')
    }

    checkInvalidData() {
        cy.get(this.selectorsList().invalidDataAlert).should('be.visible')
    }

    checkEmptyField() {
        cy.get(this.selectorsList().userNameField).click().blur()
        cy.get(this.selectorsList().userNameAlert).should('be.visible')
    }
   
  
}
export default LoginPage