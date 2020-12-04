import { importData } from "gondolajs";

export class ultilities {
    public getUserInfo(userName: string): any {
        try {
            return importData("./data/users.json").filter((user: any) => user.firstName === userName)[0];
        } catch (err) {
            throw err;
        }
    }
}
export default new ultilities();
