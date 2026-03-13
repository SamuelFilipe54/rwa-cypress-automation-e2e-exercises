import SendMoneyPage from '../pages/sendMoneyPage.js'
import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'

const sendMoneyPage = new SendMoneyPage
const loginPage = new LoginPage

describe('Send Money Feature Test', () => {

   beforeEach(() => {
      cy.request('POST', 'http://localhost:3001/testData/seed')
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      
})

   it.only('Send Money Feature Test - Success', () => {
      sendMoneyPage.getUserBalance().then((balanceBefore) => {
      const before = parseFloat(balanceBefore.replace('$', '').replace(',', ''))
          cy.intercept('POST', '/transactions').as('createTransaction')
      
      sendMoneyPage.sendMoney(1, 'valid value test')
      sendMoneyPage.sendMoneyValidValue()
          cy.wait('@createTransaction')
          cy.get('[data-test="sidenav-user-balance"]').should('not.contain', balanceBefore)
      sendMoneyPage.getUserBalance().then((balanceAfter) => {
      const after = parseFloat(balanceAfter.replace('$', '').replace(',', ''))
      expect(after).to.be.lessThan(before)
   })
  })
 })
 
   it('Send Money With a Invalid Value - Fail', () => {
      sendMoneyPage.getUserBalance().then((balanceBefore) => {
      const before = parseFloat(balanceBefore.replace('$', '').replace(',', ''))
          cy.intercept('POST', '/transactions').as('createTransaction')
      sendMoneyPage.sendMoney(-1, 'invalid value test')
      sendMoneyPage.sendMoneyInvalidValue()
          cy.wait('@createTransaction')
      sendMoneyPage.getUserBalance().then((balanceAfter) => {
      const after = parseFloat(balanceAfter.replace('$', '').replace(',', ''))
      expect(after).to.be.equal(before)
      //BUG: System allows negative transaction values
    })
   })
  })




})

