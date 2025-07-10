"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Username {
    constructor(username, signUpUI) {
        this.$username = $(username);
        this.$username.on("input", e => {
            signUpUI.update();
        });
    }
    getUsername() {
        return this.$username.val();
    }
    isFilled() {
        return this.$username.val() !== "";
    }
    removeSpace(text) {
        return text.replace(/\s+/g, '');
    }
}
exports.default = Username;
