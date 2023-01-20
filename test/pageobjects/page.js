
module.exports = class Page {

    open (path) {
        browser.setWindowSize(1700, 1000);
        return browser.url(`https://dev-178fz.roseltorg.ru/${path}`)
    }
}