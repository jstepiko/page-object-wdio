import { expect } from 'chai';
import LoginPage from '../pageOblects/Login.page';

describe('Common End to End Login', () => {
    before(() => {
        LoginPage.open("https://stage.pasv.us/user/login");
        LoginPage.elementsAreLoaded([LoginPage.loginButton]);
    });

    it('Successfully login with a valid email and password', () => {
        LoginPage.logInAs('admin@pasv.com', 'admin');
        expect(LoginPage.successMsgDisplayed());
    });
});
