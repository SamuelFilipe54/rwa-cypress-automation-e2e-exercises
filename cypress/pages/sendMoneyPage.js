class SendMoneyPage {
  selectorsList(){
   const selectors = {
       userBalancerCounter: '[data-test="sidenav-user-balance"]',
       newTransactionButton: '[data-test="nav-top-new-transaction"]',
       checkSeachBar: '[type="text"]',
       selectContactGrid: '[data-test="user-list-item-uBmeaz5pX"]', 
       addAmountField: '[name="amount"]',
       addNoteField: '[placeholder="Add a note"]',
       paymentButton: '[data-test="transaction-create-submit-payment"]',
       checkPaymentSuccess: '[data-test="alert-bar-success"]',
       userBalance: '[data-test="sidenav-user-balance"]',
       returnButton: '[data-test="new-transaction-return-to-transactions"]',
       createNewTransactionButton: '[data-test="new-transaction-create-another-transaction"]',
       initialPageNextButton: '.MuiButton-textPrimary',
       bankNameField: '#bankaccount-bankName-input',
       routingNumberField: '#bankaccount-routingNumber-input',
       accountNumberField: '#bankaccount-accountNumber-input',
       saveButton: '.BankAccountForm-submit',
       doneButton: '.MuiButton-textPrimary',
       nextButton: '[data-test="user-onboarding-next"]',
       temporary: '[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemText-root > .MuiTypography-body1'
   }
return selectors}
 
    sendMoney(amount, note) {
     cy.get(this.selectorsList().newTransactionButton).click()
     cy.get(this.selectorsList().checkSeachBar).should('be.visible')
     cy.get(this.selectorsList().selectContactGrid).click()
     cy.get(this.selectorsList().addAmountField).type(amount)
     cy.get(this.selectorsList().addNoteField).type(note)
     cy.get(this.selectorsList().paymentButton).click()
 }

    getUserBalance() {
     return cy.get(this.selectorsList().userBalance).invoke('text')
 }

    sendMoneyValidValue() {
     cy.contains('valid value test').should('be.visible')
     cy.get(this.selectorsList().returnButton).click()
 }

    sendMoneyInvalidValue() {
     cy.contains('invalid value test').should('be.visible')

 }

    sendMoneyWithoutBalance(bankName, routingNumber, accountNumber, amount, note) {
     cy.get(this.selectorsList().initialPageNextButton).click()
     cy.get(this.selectorsList().bankNameField).type(bankName)
     cy.get(this.selectorsList().routingNumberField).type(routingNumber)
     cy.get(this.selectorsList().accountNumberField).type(accountNumber)
     cy.get(this.selectorsList().saveButton).click()
     cy.get(this.selectorsList().doneButton).click()
     cy.get(this.selectorsList().nextButton).click()
    }

    sendMoneyWithoutBalanceVerify() {
        cy.contains('inviting money without balance').should('be.visible')
    }


}
export default SendMoneyPage