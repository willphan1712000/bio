"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../../Web-Development/W");
class FontColor {
    constructor(container, reset, target) {
        this.reset = reset;
        this.colorPicker = (0, W_1.$$)(container).colorPickerSingle(color => {
            $(target).css({
                color: color
            });
        }, {
            default: this.reset,
        });
    }
}
exports.default = FontColor;
