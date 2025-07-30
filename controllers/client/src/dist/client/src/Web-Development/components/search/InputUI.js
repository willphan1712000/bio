"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InputUI {
    constructor(input, searchUI) {
        Object.defineProperty(this, "$input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
