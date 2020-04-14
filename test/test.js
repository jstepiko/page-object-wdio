import { expect } from 'chai';
import LoginPage from '../pageOblects/Login.page';
//import MainPage from '../pageOblects/Main.page'

describe('Common End to End Login', () => {
    before(() => {
        LoginPage.open("https://stage.pasv.us/user/login");

        LoginPage.elementsAreLoaded(LoginPage.emailInput);
    });

    it('Successfully login with a valid email and password', () => {
        LoginPage.logInAs('admin@pasv.com', 'admin');
        //expect(MainPage.courcesLink.isExisting()).toBeTruthy();
        expect(LoginPage.successMsgDisplayed()).true;
    });
});
