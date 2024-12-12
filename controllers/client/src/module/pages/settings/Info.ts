import TextEditor from "../../../Web-Development/components/textEditor/TextEditor";
import { $$ } from "../../../Web-Development/W";

export default class Info {
    private name!: TextEditor;
    private org!: TextEditor;
    private des!: TextEditor;
    private data!: {
        name: string,
        org: string,
        des: string
    }

    constructor(name: {name: string, target: string}, org: {name: string, target: string}, des: {name: string, target: string}) {
        this.name = $$(name.name).textEditor(e => {
            $(name.target).html(e);
        });
        this.org = $$(org.name).textEditor(e => {
            $(org.target).html(e);
        });
        this.des = $$(des.name).textEditor(e => {});
    }
}