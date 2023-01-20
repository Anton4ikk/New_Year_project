const LoginPage = require('../pageobjects/login.page');
const Config = require('../config');

describe('Auction page', () => {

    it('could be watched for a long time', async () => {

        await LoginPage.open();
        
        while (true) {
            await LoginPage.login(Config.username, Config.password);
            await LoginPage.goToAuction();
            await LoginPage.waitSome();
            await LoginPage.logout();
        }

    });

});


