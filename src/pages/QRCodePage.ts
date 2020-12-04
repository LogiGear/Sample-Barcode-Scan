import { action, gondola, locator, page } from "gondolajs";
import Constant from "./constant";

@page
export class QRCodePage {
    @locator
    public txtQRCode = {
        id: `com.blogspot.aeioulabs.barcode:id/code_edit_simple__text1`
    }
    @locator
    public btnSave = {
        id: `com.blogspot.aeioulabs.barcode:id/edit_menu__save`
    }
    @locator
    public lbQRCodeContent = {
        id: `com.blogspot.aeioulabs.barcode:id/code_page_header_row__text`
    }

    @action("check qrcode content", "Check QR Code content")
    public async checkQRCodeContent(value:string){
        await gondola.waitForElement(this.lbQRCodeContent, 30);
        await gondola.checkText(this.lbQRCodeContent, value);
        await Constant.setChecked(true);
        await gondola.report(Constant.isChecked.toString());
    }

    @action("enter qr code", "Enter QR Code")
    public async enterQRCode(value:string){
        await gondola.waitForElement(this.txtQRCode, 5);
        await gondola.enter(this.txtQRCode, value);
    }

    @action("select new qr code type", "Select new QR code type")
    public async selectNewBarcodeType(type:string) {
        let newBarcodeLoc = `//android.widget.TextView[@text= "` + type + `"]`;
        await gondola.waitForElement(newBarcodeLoc, 5);
        await gondola.tap(newBarcodeLoc);
    }

    @action("create new qr code", "Create new QR Code")
    public async createNewQRCode(type:string, value:string){
        await this.selectNewBarcodeType(type);
        await this.enterQRCode(value);
        await gondola.tap(this.btnSave);
    }
}
export default new QRCodePage();
