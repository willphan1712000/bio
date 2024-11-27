"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckBox {
    constructor(checkbox, signUpUI) {
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
