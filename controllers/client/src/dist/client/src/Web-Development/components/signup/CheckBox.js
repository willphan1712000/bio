"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckBox {
    constructor(checkbox, signUpUI) {
        Object.defineProperty(this, "$checkbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$checkbox = $(checkbox);
        this.$checkbox.on("change", e => {
            signUpUI.update();
        });
    }
    isChecked() {
        return this.$checkbox.is(':checked');
    }
}
exports.default = CheckBox;
