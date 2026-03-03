class RegisterPage {
    selectorsList(){
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            userNameField: '[name="username"]',
            passwordField: '[name="password"]',
            confirmPasswordField: '[name="confirmPassword"]',
            signUpButton: '[type="submit"]',
            checkLoginPageGrid: '.SignInForm-form',
            firstNameAlert: '#firstName-helper-text',
            lastNameAlert: '#lastName-helper-text',
            userNameAlert: '#username-helper-text',
            passwordAlert: '#password-helper-text',
            confirmPasswordAlert: '#confirmPassword-helper-text',
        }
        
   return selectors}
   accessRegisterPage() {
       cy.visit('/signup')
   }
   
   registerWithUser(firstName, lastName, userName, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName)
    cy.get(this.selectorsList().lastNameField).type(lastName)
    cy.get(this.selectorsList().userNameField).type(userName)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    cy.get(this.selectorsList().signUpButton).click()
   }

   registerWithUserFail(firstName, lastName, userName, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName)
    cy.get(this.selectorsList().lastNameField).type(lastName)
    cy.get(this.selectorsList().userNameField).type(userName)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
   }

   checkLoginPage() {
    cy.get(this.selectorsList().checkLoginPageGrid).should('be.visible')
  }

   validateEmptyField() {
    cy.get(this.selectorsList().firstNameField).click().blur()
    cy.get(this.selectorsList().firstNameAlert).should('be.visible')
    cy.get(this.selectorsList().lastNameField).click().blur()
    cy.get(this.selectorsList().lastNameAlert).should('be.visible')
    cy.get(this.selectorsList().userNameField).click().blur()
    cy.get(this.selectorsList().userNameAlert).should('be.visible')
    cy.get(this.selectorsList().passwordField).click().blur()
    cy.get(this.selectorsList().passwordAlert).should('be.visible')
    cy.get(this.selectorsList().confirmPasswordField).click().blur()
    cy.get(this.selectorsList().confirmPasswordAlert).should('be.visible')
   }

   passwordWithOnly4Characters() {
    cy.get(this.selectorsList().passwordAlert).should('be.visible')
   }

   checkPasswordConfirmation() {
    cy.get(this.selectorsList().confirmPasswordField)
    cy.get(this.selectorsList().confirmPasswordAlert).should('be.visible')
   }


}
export default RegisterPage