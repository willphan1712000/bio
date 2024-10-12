import { $$ } from "../../Web-Development/W";
export default class Info {
    constructor(name, org, des) {
        this.name = $$(name.name).textEditor(e => {
            $(name.target).html(e);
        });
        this.org = $$(org.name).textEditor(e => {
            $(org.target).html(e);
        });
        this.des = $$(des.name).textEditor(e => { });
    }
}
