"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Register {
    constructor(register, signUpUI) {
        Object.defineProperty(this, "$register", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isEnabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$register = $(register);
        this.isEnabled = false;
        this.isDisabledHandling();
        this.$register.click((e) => {
            e.preventDefault();
            signUpUI.signup();
        });
    }
    enabled(is) {
        this.isEnabled = is;
        if (this.isEnabled) {
            this.isEnabledHandling();
        }
        else {
            this.isDisabledHandling();
        }
    }
    isEnabledHandling() {
        this.$register.prop('disabled', false);
        this.$register.css({
            "backgroundColor": "#cec3e7"
        });
    }
    isDisabledHandling() {
        this.$register.prop('disabled', true);
        this.$register.css({
            "backgroundColor": "#c6c6c6"
        });
    }
}
exports.default = Register;
