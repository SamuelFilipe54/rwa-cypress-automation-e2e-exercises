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
   }
return selectors}
 
    sendMoneyValidValue(amount, note) {
     cy.get(this.selectorsList().newTransactionButton).click()
     cy.get(this.selectorsList().checkSeachBar).should('be.visible')
     cy.get(this.selectorsList().selectContactGrid).click()
     cy.get(this.selectorsList().addAmountField).type(amount)
     cy.get(this.selectorsList().addNoteField).type(note)
     cy.get(this.selectorsList().paymentButton).click()
     cy.contains('test').should('be.visible')
     cy.get(this.selectorsList().returnButton).click()
 }

    getUserBalance() {
     return cy.get(this.selectorsList().userBalance).invoke('text')
 }



}
export default SendMoneyPage