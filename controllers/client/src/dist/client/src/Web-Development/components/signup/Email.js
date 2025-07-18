"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(email, signUpUI) {
        Object.defineProperty(this, "$email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$email = $(email);
        this.$email.on("input", e => {
            signUpUI.update();
        });
    }
    getEmail() {
        return this.$email.val();
    }
}
exports.default = Email;
