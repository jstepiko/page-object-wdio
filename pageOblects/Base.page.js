export default class BasePage {
    open(path) {
        browser.url(path);
    }

    getElement(testId) {
        return browser.$(testId);
    }

    getElements(testId) {
        return browser.$$(testId);
    }

    elementsAreLoaded(elements, timeout = 10000) {
        browser.waitUntil(() => {
            return this.getMissingElements(elements).length === 0;
        }, timeout, 'Items missing: ' +
            `${this.getMissingElements(elements)}. \n` +
            `Current url: ${browser.getUrl()}`);
        return true;
    }

    getMissingElements(elements) {
        return elements
            .filter((element) => !element.isDisplayed())
            .map((element) => element.selector);
    }

    successMsgDisplayed(timeout = 5000) {
        browser.waitUntil(() => {
            return $('.notification-success').isDisplayed();
        }, timeout, 'Wrong / no notification displayed');
    }
}
