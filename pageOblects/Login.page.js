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

    expectedElements() {
        return {
            this.emailInput,
            this.passwordInput,
            this.loginButton,
            this.forgotPasswordLink,
            this.registerLink
        }
    }
}

export default new LoginPage();
