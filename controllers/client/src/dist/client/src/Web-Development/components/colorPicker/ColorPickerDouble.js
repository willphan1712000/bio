"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ColorPickerMethod_1 = require("./ColorPickerMethod");
class ColorPickerDouble extends ColorPickerMethod_1.ColorPickerMethod {
    constructor(container, cb, options) {
        super();
        this.options = options;
        this.container = container;
        this.color = options.default;
        this.gradient = {
            color1: "0",
            color2: "0",
            deg: "0"
        };
        this.render();
        this.clickBehavior(this.container);
        const color1 = document.querySelector(this.container + " #color1");
        color1.addEventListener("input", e => {
            const input = e.target;
            this.gradient.color1 = input.value;
            this.setColor(this.gradient);
            cb(this.getColor());
        });
        const color2 = document.querySelector(this.container + " #color2");
        const deg = document.querySelector(this.container + " #deg");
        color2.addEventListener("input", e => {
            const input = e.target;
            this.gradient.color2 = input.value;
            this.setColor(this.gradient);
            cb(this.getColor());
        });
        deg.addEventListener("input", e => {
            const input = e.target;
            this.gradient.deg = input.value;
            this.setColor(this.gradient);
            cb(this.getColor());
        });
        $(this.container + " .colorPickerBox__reset").click(e => {
            e.stopPropagation();
            this.color = this.options.default;
            cb(this.getColor());
        });
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = `linear-gradient(${color.deg}deg, ${this.hslToHex(Number(color.color2), 100, 80)}, ${this.hslToHex(Number(color.color1), 100, 80)})`;
    }
    render() {
        const style = document.createElement("style");
        style.textContent = this.css();
        document.head.append(style);
        const $container = $(this.container);
        $container.append(this.html());
    }
    html() {
        return `
            <div class="colorPickerBox">
                <div class="colorPickerBox__reset">
                    <span>Reset</span>
                </div>
                <div class="colorPickerBox__input">
                    <input id="color1" class="color1" type="range" min="0" max="360" value="0">
                    <input id="color2" class="color2" type="range" min="0" max="360" value="0">
                    <input id="deg" class="id" type="range" min="0" max="360" value="0">
                </div>
            </div>
        `;
    }
    css() {
        var _a;
        return `
            ${this.container} {
                position: relative;
            }
            ${this.container} .colorPickerBox {
                display: flex;
                flex-direction: row;
                position: absolute;
                align-items: center;
                justify-content: center;
                left: 110%;
                height: 70px;
                display: none;
                background: #fff;
                border-radius: 20px;
                padding: 10px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px;
                z-index: 1;
            }
            ${this.container} .colorPickerBox__reset {
                display: ${((_a = this.options) === null || _a === void 0 ? void 0 : _a.default) == null ? "none" : "flex"};
                justify-content: center;
                align-items: center;
                height: fit-content;
                padding-right: 10px;
            }
            ${this.container} .colorPickerBox__input {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                gap: 10px;
            }
            ${this.container} .colorPickerBox .color1, ${this.container} .colorPickerBox .color2 {
                -webkit-appearance: none;
                appearance: none;
                height: 10px;
                border-radius: 20px;
                background: linear-gradient(to right, 
                    hsl(0, 100%, 50%), 
                    hsl(60, 100%, 50%), 
                    hsl(120, 100%, 50%), 
                    hsl(180, 100%, 50%), 
                    hsl(240, 100%, 50%), 
                    hsl(300, 100%, 50%), 
                    hsl(360, 100%, 50%)
                );
                outline: none;
                opacity: 0.9;
                transition: opacity 0.2s;
                border: none;
            }
        `;
    }
}
exports.default = ColorPickerDouble;
