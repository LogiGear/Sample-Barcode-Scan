export class Constant{
    public isChecked: boolean = false;

    constructor(){
        this.isChecked = false;
    }

    setChecked(value:boolean){
        this.isChecked = value;
    }
}
export default new Constant();