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

    it('User Register - Empty Fields - Fail', () => {
        registerPage.accessRegisterPage()
        registerPage.validateEmptyField()
    })

    it('User Register - Password With Only 4 Characters - Fail', () => {
        const timestamp = Date.now()
        const firstName = `User${timestamp}`
        const lastName = `Test${timestamp}`
        const userName = `User${timestamp}`
        const invalidPassword = `Pas`
        const confirmPassword = `Pas`

        registerPage.accessRegisterPage()
        registerPage.registerWithUserFail(firstName, lastName, userName, invalidPassword, confirmPassword)
        registerPage.passwordWithOnly4Characters()
    })

    it('User Register - Password Confirmation - Fail', () => {
        const timestamp = Date.now()
        const firstName = `User${timestamp}`
        const lastName = `Test${timestamp}`
        const userName = `User${timestamp}`
        const password = `Pass123`
        const invalidPassword = `Pas`

        registerPage.accessRegisterPage()
        registerPage.registerWithUserFail(firstName, lastName, userName, password, invalidPassword)
        registerPage.checkPasswordConfirmation()
    })
})