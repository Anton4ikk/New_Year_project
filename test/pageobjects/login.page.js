const Page = require('./page');

//Страница логина - подстраница проекта
class LoginPage extends Page {

    //Захват поля ввода логина
    get inputUsername () {
        return $('[name="username"]');
    }

    //Захват поля ввода пароля
    get inputPassword () {
        return $('[name="pass"]');
    }

    //Нажатие на кнопку входа
    get btnLogin () {
        return $('aria/Вход по паролю');
    }

    //Нажатие на кнопку выхода
    get btnLogout () {
        return $('aria/Выход');
    }

    //async fullScreen() {
    //    await 
    //}

    //Выполняет вход, заполняя поля параметрами
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async goToAuction () {
        await browser.url('https://dev-178fz.roseltorg.ru/#com/procedure/trade/lot/8496/procedure/9237');
    }

    async waitSome () {
        await browser.pause(540000); // 9 минут
    }

    async logout () {
        await browser.url(`https://dev-178fz.roseltorg.ru/`)
        await this.btnLogout.click();
    }

    /**
    overwrite specific options to adapt it to page object
    */
    open () {
        return super.open('');
    }
    
}

module.exports = new LoginPage();