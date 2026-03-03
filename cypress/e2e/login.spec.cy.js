import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage

describe('Login RWA Tests', () => {
  
  it('Login with user - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkMenuPage()
  })

  it('Login with user - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkInvalidData()
  })

  it('Login with user - empty field', () => {
    loginPage.accessLoginPage()
    loginPage.checkEmptyField()
  })
})