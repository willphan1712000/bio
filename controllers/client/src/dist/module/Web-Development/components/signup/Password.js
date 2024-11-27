"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Password {
    constructor(password, signUpUI) {
        this.$password = $(password);
        this.$password.on("input", e => {
            signUpUI.update();
        });
    }
    getPassword() {
        return this.$password.val();
    }
}
exports.default = Password;
