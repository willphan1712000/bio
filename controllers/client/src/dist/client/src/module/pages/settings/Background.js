"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../../../Web-Development/W");
class Background {
    constructor(container, reset, target) {
        this.reset = reset;
        this.colorPicker = (0, W_1.$$)(container).colorPickerDouble(color => {
            $(target).css({
                background: color
            });
        }, {
            default: this.reset,
        });
    }
}
exports.default = Background;
