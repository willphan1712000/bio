"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InputUI {
    constructor(input, searchUI) {
        this.$input = $(input);
        this.value = "";
        this.$input.on("input", e => {
            this.value = e.target.value;
            searchUI.update();
        });
    }
    getValue() {
        return this.value;
    }
}
exports.default = InputUI;
