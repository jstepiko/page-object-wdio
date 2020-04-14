import BasePage from './Base.page';

class LoginPage extends BasePage {

    get emailInput() {
        return this.getElement('input[name="email"]');
    }

    get passwordInput() {
        return this.getElement('input[name="password"]');
    }

    get loginButton() {
        return this.getElements('.btn')[1];
    }

    get forgotPasswordLink() {
        return this.getElement('.btn-');
    }

    get registerLink() {
        return this.getElements('.btn')[0];
    }

    logInAs(email, password) {
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

}

export default new LoginPage();
