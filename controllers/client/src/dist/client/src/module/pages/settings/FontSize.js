"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../../../Web-Development/W");
class FontSize {
    constructor(containter, reset, target) {
        this.rangeSlider = (0, W_1.$$)(containter).rangeSlider(value => {
            $(target).css({
                "fontSize": value + "px"
            });
        }, {
            default: reset,
            unit: "px",
            range: [0, 25]
        });
    }
}
exports.default = FontSize;
