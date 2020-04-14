import BasePage from './Base.page';

class MainPage extends BasePage {

    get courcesLink() {
        return this.getElement('li');
    }

}

export default new MainPage();
