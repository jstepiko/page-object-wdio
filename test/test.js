import {expect}  from 'chai';
import LoginPage from '../_page/LoginPage';
import {student} from  '../_data/user.data';


describe('LOGIN PAGE --POSITIVE', () => {
    before(() => {
        LoginPage.open();

    });

    it('button `Submit` should be disabled by default', () => {
        expect(LoginPage.submitBtn.isEnabled()).false;
    });

    it('should login user us student and get successful notification', () => {
        LoginPage.login(student);
        Notification.successMsgDisplayed();
    });
});
