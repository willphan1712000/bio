"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSlider = void 0;
class RangeSlider {
    constructor(container, cb, options) {
        var _a;
        this.options = options;
        this.value = (_a = this.options) === null || _a === void 0 ? void 0 : _a.default;
        this.container = container;
        this.render();
        const $container = $(this.container);
        const $rangeSlider = $(this.container + " .rangeSliderBox");
        $container.click(e => {
            e.stopPropagation();
            if ($rangeSlider.css('display') === 'none') {
                $rangeSlider.css('display', 'flex');
            }
            else {
                $rangeSlider.css('display', 'none');
            }
        });
        $("body").click(e => {
            e.stopPropagation();
            $rangeSlider.css('display', 'none');
        });
        $rangeSlider.click(e => {
            e.stopPropagation();
            $rangeSlider.css('display', 'flex');
        });
        const range = document.querySelector(this.container + " #range");
        const showRange = document.querySelector(this.container + " #showRange");
        range.addEventListener("input", e => {
            var _a;
            const input = e.target;
            this.setValue(Number(input.value));
            cb(this.getValue());
            showRange.value = this.getValue() + ((_a = this.options) === null || _a === void 0 ? void 0 : _a.unit);
        });
        $(".rangeSliderBox__reset").click(e => {
            var _a, _b;
            e.stopPropagation();
            this.setValue((_a = this.options) === null || _a === void 0 ? void 0 : _a.default);
            cb(this.getValue());
            showRange.value = this.getValue() + ((_b = this.options) === null || _b === void 0 ? void 0 : _b.unit);
            range.value = this.getValue() + '';
        });
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    render() {
        const style = document.createElement("style");
        style.textContent = this.css();
        document.head.append(style);
        const $container = $(this.container);
        $container.append(this.html());
    }
    html() {
        var _a, _b, _c;
        return `
            <div class="rangeSliderBox">
                <div class="rangeSliderBox__reset">
                    <span>Reset</span>
                </div>
                <div class="rangeSliderBox__input">
                    <input id="showRange" class="showRange" type="text" value="${this.value + ((_a = this.options) === null || _a === void 0 ? void 0 : _a.unit)}">
                    <input id="range" class="range" type="range" min="${(_b = this.options) === null || _b === void 0 ? void 0 : _b.range[0]}" max="${(_c = this.options) === null || _c === void 0 ? void 0 : _c.range[1]}" value="${this.value}">
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
            ${this.container} .rangeSliderBox {
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
            ${this.container} .rangeSliderBox__reset {
                display: ${((_a = this.options) === null || _a === void 0 ? void 0 : _a.default) == null ? "none" : "flex"};
                justify-content: center;
                align-items: center;
                height: fit-content;
                padding-right: 10px;
            }
            ${this.container} .rangeSliderBox__input {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                gap: 10px;
            }
            ${this.container} .rangeSliderBox .range {
                height: 10px;
                border-radius: 20px;
                outline: none;
                opacity: 0.9;
                transition: opacity 0.2s;
                border: none;
            }
            ${this.container} .rangeSliderBox .showRange {
                border: none;
            }
        `;
    }
}
exports.RangeSlider = RangeSlider;
