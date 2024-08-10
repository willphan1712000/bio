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
    signup() {
        return new Signup(this.ele1, this.ele2, this.ele3, this.ele4, this.ele5, this.ele6);
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
class Signup extends WW6 {
    constructor(username, email, password, error, submit, url) {
        super(username, email, password, error, submit, url);
        this.username = username;
        this.email = email;
        this.password = password;
        this.error = error;
        this.submit = submit;
        this.url = url;
        this.$username = $(this.username);
        this.$email = $(this.email);
        this.$password = $(this.password);
        this.$error = $(this.error);
        this.$submit = $(this.submit);
    }
    run() {
        this.$submit.on("click", (e) => {
            e.preventDefault();
            if (this.isFillAll(this.$username.val(), this.$email.val(), this.$password.val())) {
                this.$error.html("Please fill in all information!");
                this.shakingErrorMsg(this.$error);
            }
            else {
                if (!this.isValidEmail(this.$email.val())) {
                    this.$error.html("The email is not valid!");
                    this.shakingErrorMsg(this.$error);
                }
                else {
                    if (!this.isValidPassword(this.$password.val())) {
                        this.$error.html("The password is not valid!");
                        this.shakingErrorMsg(this.$error);
                    }
                    else {
                        this.$error.html("");
                        $.ajax({
                            url: this.url.signup,
                            method: "POST",
                            dataType: "json",
                            data: {
                                username: this.removeSpace(this.$username.val()),
                                email: this.$email.val(),
                                password: this.$password.val()
                            },
                            success: (e) => {
                                if (e[0]) {
                                    this.$error.html("The username has already been taken!");
                                    this.shakingErrorMsg(this.$error);
                                }
                                else {
                                    if (!e[1]) {
                                        this.$error.html("The email is not valid!");
                                        this.shakingErrorMsg(this.$error);
                                    }
                                    else {
                                        if (!(e[2] && e[3] && e[4] && e[5])) {
                                            this.$error.html("There is an error, try again!");
                                            this.shakingErrorMsg(this.$error);
                                        }
                                        else {
                                            this.signUpSuccess(".signupChild", "inactive", ".signupSuccess", "active");
                                            this.createFiles(this.removeSpace(this.$username.val()));
                                        }
                                    }
                                }
                            },
                            error: () => {
                                this.$error.html("The server has internal error!");
                                this.shakingErrorMsg(this.$error);
                            }
                        });
                    }
                }
            }
        });
    }
    isFillAll(username, email, password) {
        return !(username && email && password);
    }
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    isValidPassword(password) {
        const isValidLength = password.length >= 12;
        let hasUpperCase = false;
        let hasDigit = false;
        let hasSpecialChar = true;
        for (let i = 0; i < password.length; i++) {
            const position = password.charCodeAt(i);
            if (position >= 65 && position <= 90) {
                hasUpperCase = true;
            }
            if (position >= 48 && position <= 57) {
                hasDigit = true;
            }
            if (position >= 33 && position <= 47) {
                hasSpecialChar = true;
            }
            if (hasUpperCase && hasDigit && hasSpecialChar) {
                return isValidLength && hasUpperCase && hasDigit && hasSpecialChar;
            }
        }
        return false;
    }
    removeSpace(text) {
        return text.replace(/\s+/g, '');
    }
    shakingErrorMsg(error) {
        const requestAnimationFrame = window.requestAnimationFrame;
        let counter = 0;
        let x = 0;
        let dx = -2.5;
        const shaking = () => {
            counter++;
            x += dx;
            if (x <= -15 || x >= 15) {
                dx = -dx;
            }
            const runAnimation = requestAnimationFrame(shaking);
            if (counter === 30) {
                cancelAnimationFrame(runAnimation);
                x = 0;
            }
            error.css({
                transform: `translateX(${x}px)`
            });
        };
        shaking();
    }
    signUpSuccess(before, beforeClass, after, afterClass) {
        $(before).addClass(beforeClass);
        $(after).addClass(afterClass);
    }
    createFiles(username) {
        $$$(this.url.create, {
            username: username
        }).api().post();
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
