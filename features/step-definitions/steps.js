const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}


Given('the user is on login page', function () {
    LoginPage.open();
    expect(browser).toHaveTitle('loginpage');
});

When('the user enters username as {string} and password as {string}', function (username, password) {
    LoginPage.inputUsername.setValue(username);
    LoginPage.inputUsername.setValue(password);

});

When('clicks on login button', function () {
    LoginPage.btnSubmit.click();
});

Then('the user is logged in and displays a message {string}', function (successMessage) {
    expect(SecurePage.flashAlert).toExist();
    expect(SecurePage.flashAlert).toHaveTextContaining(successMessage);
});

  Then('the user must remain on login page displaying a message {string}', function (errorMessage) {
    expect(LoginPage.messageElement).toExist();
    expect(LoginPage.messageElement).toHaveTextContaining(errorMessage);
});  


