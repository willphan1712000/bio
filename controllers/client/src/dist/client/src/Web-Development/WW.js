"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$$$ = $$$;
const PhoneFormat_1 = __importDefault(require("./algorithms/PhoneFormat"));
const SignUpUI_1 = __importDefault(require("./components/signup/SignUpUI"));
function $$$(ele1, ele2, ele3, ele4, ele5, ele6) {
    if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined && ele5 !== undefined && ele6 !== undefined) {
        return new WW6(ele1, ele2, ele3, ele4, ele5, ele6);
    }
    else if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined && ele5 !== undefined) {
        return new WW5(ele1, ele2, ele3, ele4, ele5);
    }
    else if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined) {
        return new WW4(ele1, ele2, ele3, ele4);
    }
    else if (ele2 !== undefined && ele3 !== undefined) {
        return new WW3(ele1, ele2, ele3);
    }
    else if (ele2 !== undefined) {
        return new WW2(ele1, ele2);
    }
    else {
        return new WW1(ele1);
    }
}
class WW1 {
    constructor(ele1) {
        this.ele1 = ele1;
    }
    phoneFormat() {
        return new PhoneFormat_1.default(this.ele1);
    }
}
class WW2 {
    constructor(ele1, ele2) {
        this.ele1 = ele1;
        this.ele2 = ele2;
    }
    api() {
        return new API(this.ele1, this.ele2);
    }
}
class WW3 {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
    }
    signup() {
        return new Signup(this.ele1, this.ele2, this.ele3);
    }
    formValidate() {
        return new FormValidate(this.ele1, this.ele2, this.ele3);
    }
}
class WW4 {
    constructor(ele1, ele2, ele3, ele4) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
    }
}
class WW5 {
    constructor(ele1, ele2, ele3, ele4, ele5) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
        this.ele5 = ele5;
    }
}
class WW6 {
    constructor(ele1, ele2, ele3, ele4, ele5, ele6) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
        this.ele5 = ele5;
        this.ele6 = ele6;
    }
}
class FormValidate extends WW3 {
    constructor(inputElement, feedbackElement, regex) {
        super(inputElement, feedbackElement, regex);
        this.inputElement = inputElement;
        this.feedbackElement = feedbackElement;
        this.regex = regex;
        this.isValid = true;
        if (this.inputElement === null) {
            throw new Error("Input Element is not defined or rendered");
        }
        if (this.feedbackElement === null) {
            throw new Error("Feedback Element is not defined or rendered");
        }
        this.execute();
    }
    setValidity(value) {
        this.isValid = value;
    }
    getValidity() {
        return this.isValid;
    }
    execute() {
        const regex = new RegExp(this.regex);
        this.inputElement.addEventListener("input", (e) => {
            const target = e.target;
            if (target.value !== '') {
                if (regex.test(target.value)) {
                    this.setValidity(true);
                    this.feedbackElement.innerHTML = `<i style="color: green;" class="fa-solid fa-check"></i>`;
                }
                else {
                    this.setValidity(false);
                    this.feedbackElement.innerHTML = `<i style="color: red;" class="fa-solid fa-x"></i>`;
                }
            }
            else {
                this.feedbackElement.innerHTML = '';
                this.setValidity(true);
            }
        });
        return this;
    }
    cleanup() {
        this.inputElement.removeEventListener('input', () => { });
        return this;
    }
}
class Signup extends WW3 {
    constructor(ui, url, success) {
        super(ui, url, success);
        this.signUpUI = new SignUpUI_1.default(ui, url, success);
    }
}
class API extends WW2 {
    constructor(src, data) {
        super(src, data);
    }
    get() {
        return new Promise((res, rej) => {
            $.ajax({
                url: this.ele1,
                method: "GET",
                dataType: "json",
                contentType: "application/json",
                success: (e) => {
                    res(e);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    rej(new Error(`AJAX request failed: ${textStatus}, ${errorThrown}`));
                }
            });
        });
    }
    post() {
        return new Promise((res, rej) => {
            $.ajax({
                url: this.ele1,
                method: "POST",
                data: JSON.stringify(this.ele2),
                dataType: "json",
                contentType: "application/json",
                success: (e) => {
                    res(e);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    rej(new Error(`AJAX request failed: ${textStatus}, ${errorThrown}`));
                }
            });
        });
    }
}
