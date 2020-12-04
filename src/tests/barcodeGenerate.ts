import { TestCase, TestModule, gondola, importData } from "gondolajs";
import HomePage from "../pages/homePage";
import QRCodePage from "../pages/qrCodePage";
TestModule("Barcode Generate");

TestCase("Generate new barcode", async () => {
    await HomePage.openNewBarcode();
    await HomePage.selectNewBarcodeType("QR Code");
    await QRCodePage.createNewQRCode("Text", "This is BarCode");
    const wdio = require("webdriverio");
    const opts = {
        path: '/wd/hub',
        port: 4723,
        capabilities: {
          platformName: "Android",
          deviceName: "Android real",
          app: "C:/Users/hieu.tan.nguyen/Desktop/Demos3/barcodedemo/AUT/com.blogspot.aeioulabs.barcode_43_apps.evozi.com.apk",
        //   udid: "R9JN60HCW0J",
            udid: "emulator-5554",
          automationName: "UiAutomator2",
          appPackage: "com.blogspot.aeioulabs.barcode",
          appActivity: ".ui.list.CodeListActivity_"
        }
    };
    const client = await wdio.remote(opts);
    await gondola.wait(5);
    const btnContinuePermission = await client.$(`//android.widget.Button[contains(@text, "Continue")]`);
    const btnOKUpdate = await client.$(`//android.widget.Button[contains(@text, "OK")]`);
    const newBarcodeBtn = await client.$(`//android.widget.ImageView[contains(@resource-id,"barcode")]`);
    const scanCodeBtn = await client.$(`//android.widget.Button[contains(@resource-id,"code_list_floating_buttons__add_scan_label")]`);
    const lbQRCodeContent = await client.$(`//android.widget.TextView[contains(@resource-id,"com.blogspot.aeioulabs.barcode:id/code_page_header_row__text")]`);
    await btnContinuePermission.waitForExist({ timeout: 10000 });
    await btnContinuePermission.click();
    await btnOKUpdate.click();
    await newBarcodeBtn.click();
    /*await client.touchAction({
        action: 'tap',
        element: newBarcodeBtn
    });*/
    await scanCodeBtn.waitForExist({ timeout: 10000 });
    await scanCodeBtn.click();
    /*await client.touchAction({
        action: 'tap',
        element: scanCodeBtn
    });*/
    await lbQRCodeContent.waitForExist({ timeout: 30000 });
    const codeContent =  await lbQRCodeContent.getText();
    await gondola.checkEqual(codeContent, "This is BarCode");
});
