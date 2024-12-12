"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../../client/src/Web-Development/W");
class Info {
    constructor(name, org, des) {
        this.name = (0, W_1.$$)(name.name).textEditor(e => {
            $(name.target).html(e);
        });
        this.org = (0, W_1.$$)(org.name).textEditor(e => {
            $(org.target).html(e);
        });
        this.des = (0, W_1.$$)(des.name).textEditor(e => { });
    }
}
exports.default = Info;
