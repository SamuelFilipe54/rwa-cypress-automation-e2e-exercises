import RegisterPage from '../pages/registerPage.js'

const registerPage = new RegisterPage 

describe('User Register Test', () => {

    it('User Register - Sucess', () => {
        const timestamp = Date.now()
        const firstName = `User${timestamp}`
        const lastName = `Test${timestamp}`
        const userName = `User${timestamp}`
        const password = `Pass123`

        registerPage.accessRegisterPage()
        registerPage.registerWithUser(firstName, lastName, userName, password, password)
        registerPage.checkLoginPage()
    })

    it('User Register - Fail', () => {
        registerPage.accessRegisterPage()
        registerPage.validateEmptyField()
    })
})