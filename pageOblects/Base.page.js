import ElementUtils from "../helpers/ElementUtils";

class BasePage extends ElementUtils {
    open(path) {
        browser.url(path);
    }
}

export default new BasePage();