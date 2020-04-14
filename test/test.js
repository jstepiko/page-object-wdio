import {expect}  from 'chai';
import LoginPage from '../_page/LoginPage';
import {student} from  '../_data/user.data';


describe('Common End to End Login', () => {
    before(() => {
        LoginPage.open("https://stage.pasv.us/user/login");

        LoginPage.elementsAreLoaded(LoginPage.emailInput);
    });

    it('Successfully login with a valid email and password', () => {
        LoginPage.logInAs(email, password);
        expect(MainPage.element.isExisting()).toBeTruthy();
    });

    it('should login user us student and get successful notification', () => {
        LoginPage.login(student);
        Notification.successMsgDisplayed();
    });
});
