"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhoneFormat {
    constructor(inputValue) {
        this.inputValue = inputValue;
    }
    phoneFormat(inputValue) {
        let formattedValue = '';
        for (let i = 0; i < inputValue.length; i++) {
            if (i === 3 || i === 6) {
                formattedValue += '-';
            }
            formattedValue += inputValue[i];
        }
        return formattedValue;
    }
}
exports.default = PhoneFormat;
