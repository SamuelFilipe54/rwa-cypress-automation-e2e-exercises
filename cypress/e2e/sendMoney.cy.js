import SendMoneyPage from '../pages/sendMoneyPage.js'
import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'
import RegisterPage from '../pages/registerPage.js'

const sendMoneyPage = new SendMoneyPage
const loginPage = new LoginPage
const registerPage = new RegisterPage

describe('Send Money Feature Test', () => {

   beforeEach(() => {
      cy.request('POST', 'http://localhost:3001/testData/seed')
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      
})

   it('Send Money Feature Test - Success', () => {
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

describe('Send Money Feature Test Payment Without Balance', () => {
    it.only('Send Money With Insufficient balance - Fail', () => {
     cy.request('POST', 'http://localhost:3001/testData/seed')
     const username = `${Date.now()}`;
     const password = 's3cret';
     const confirmPassword = 's3cret'
     
     registerPage.accessRegisterPage()
     registerPage.registerWithUser('James', 'Smith', username, password, confirmPassword)

     loginPage.loginWithUser(username, password)

     sendMoneyPage.sendMoneyWithoutBalance('Okuneva Inc Bank', 464652721, 539125751)
     sendMoneyPage.sendMoney(10, 'inviting money without balance')
     sendMoneyPage.sendMoneyWithoutBalanceVerify()
    })
    //BUG: The system allows transactions even if there are insufficient funds

})
  




