import { action, gondola, locator, page } from "gondolajs";
import Constant from "./constant";

@page
export class HomePage {
    @locator
    public newBarcodeBtn = {
        id: `com.blogspot.aeioulabs.barcode:id/code_list_floating_buttons__add_button`
    };
    @locator
    public addCodeBtn = {
        id: `com.blogspot.aeioulabs.barcode:id/code_list_floating_buttons__add_edit_label`
    };
    @locator
    public scanCodeBtn = {
        id: `com.blogspot.aeioulabs.barcode:id/code_list_floating_buttons__add_scan_label`
    };
    public async waitForChecked(){
        while(!Constant.isChecked){
            await gondola.wait(5);
        }
    }

    @action("open new barcode", "Open new barcode screen")
    public async openNewBarcode() {
        await gondola.waitForElement(this.newBarcodeBtn, 5);
        await gondola.tap(this.newBarcodeBtn);
        await gondola.tap(this.addCodeBtn);
    }

    @action("open scan barcode", "Open scan barcode screen")
    public async openScanBarcode() {
        await gondola.waitForElement(this.newBarcodeBtn, 5);
        await gondola.tap(this.newBarcodeBtn);
        await gondola.tap(this.scanCodeBtn);
    }

    @action("select new barcode type", "Select new barcode type")
    public async selectNewBarcodeType(type:string) {
        let newBarcodeLoc = `//android.widget.TextView[@text= "` + type + `"]`;
        await gondola.waitForElement(newBarcodeLoc, 5);
        await gondola.tap(newBarcodeLoc);
    }
}
export default new HomePage();
