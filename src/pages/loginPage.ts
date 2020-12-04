import { action, gondola, locator, page } from "gondolajs";

@page
export class loginPage {
    @locator
    public userNameTxtbox = {
        android: "~User Name",
        ios: "//XCUIElementTypeTextField[@name=\"UserName\"]",
    };
    @locator
    public passwordTxtbox = {
        android: "~Password",
        ios: "//XCUIElementTypeSecureTextField[@name=\"PassWord\"]",
    };
    @locator
    public loginBtn = {
        android: "~Button Login",
        ios: "~LoginButton",
    };
    @locator
    public alertMessageText = {
        android: "//android.widget.TextView[@text=\"Invalid UserName or Password.\"]",
        ios: "~Invalid Username or Password.",
    };
    @locator
    public okBtn = {
        android: "//android.widget.Button[@text=\"OK\"]",
        ios: "~OK",
    };
    @action("login", "Login Car Rental app")
    public async login(userName: string, password: string) {
        await gondola.waitForElement(this.userNameTxtbox, 20);
        await gondola.enter(this.userNameTxtbox, userName);
        await gondola.enter(this.passwordTxtbox, password);
        await gondola.tap(this.loginBtn);
    }
    @action("check alert message", "Check invalid message appear")
    public async checkAlertMessage() {
        await gondola.checkControlExist(this.alertMessageText);
        await gondola.tap(this.okBtn);
    }
}
export default new loginPage();
