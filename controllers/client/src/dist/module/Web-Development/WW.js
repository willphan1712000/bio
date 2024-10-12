import SignUpUI from "./components/signup/SignUpUI";
export function $$$(ele1, ele2, ele3, ele4, ele5, ele6) {
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
    formValidate() {
        return new FormValidate(this.ele1, this.ele2, this.ele3, this.ele4, this.ele5);
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
class FormValidate extends WW5 {
    constructor(input, msg, success, error, regex) {
        super(input, msg, success, error, regex);
        this.input = input;
        this.msg = msg;
        this.success = success;
        this.error = error;
        this.regex = regex;
        this.isValid = true;
    }
    setValidity(value) {
        this.isValid = value;
    }
    getValidity() {
        return this.isValid;
    }
    phoneFormat() {
        $(this.input).on("input", (event) => {
            const inputValue = event.target.value.replace(/\D/g, '');
            let formattedValue = '';
            for (let i = 0; i < inputValue.length; i++) {
                if (i === 3 || i === 6) {
                    formattedValue += '-';
                }
                formattedValue += inputValue[i];
            }
            event.target.value = formattedValue;
        });
    }
    run() {
        const regex = new RegExp(this.regex);
        $(this.input).on("input", (e) => {
            const target = e.target;
            if (target.value !== '') {
                if (regex.test(target.value)) {
                    this.setValidity(true);
                    $(this.msg).html(this.success);
                }
                else {
                    this.setValidity(false);
                    $(this.msg).html(this.error);
                }
            }
            else {
                $(this.msg).html('');
                this.setValidity(true);
            }
        });
        return this;
    }
}
class Signup extends WW3 {
    constructor(ui, url, success) {
        super(ui, url, success);
        this.signUpUI = new SignUpUI(ui, url, success);
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
