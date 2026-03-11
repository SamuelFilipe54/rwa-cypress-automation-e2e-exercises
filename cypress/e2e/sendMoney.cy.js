import SendMoneyPage from '../pages/sendMoneyPage.js'
import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'

const sendMoneyPage = new SendMoneyPage
const loginPage = new LoginPage

describe('Send Money Feature Test', () => {

   beforeEach(() => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
})

   it('Send Money Feature Test - Success', () => {
      sendMoneyPage.getUserBalance().then((balanceBefore) => {
      const before = parseFloat(balanceBefore.replace('$', '').replace(',', ''))
          cy.intercept('POST', '/transactions').as('createTransaction')
      sendMoneyPage.getUserBalance()
      sendMoneyPage.sendMoneyValidValue(1, 'test')
          cy.wait('@createTransaction')
      sendMoneyPage.getUserBalance().then((balanceAfter) => {
      const after = parseFloat(balanceAfter.replace('$', '').replace(',', ''))
      expect(after).to.be.lessThan(before)
   })
  })
 })

})

