"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
class Options {
    constructor(container, cb, options) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "font", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.container = container;
        this.options = options;
        this.list = options.list;
        this.font = options.default;
        this.render();
        const $container = $(this.container);
        const $list = $(this.container + " .list_wrapper");
        $container.click(e => {
            e.stopPropagation();
            if ($list.css('display') === 'none') {
                $list.css('display', 'flex');
            }
            else {
                $list.css('display', 'none');
            }
        });
        $("body").click(e => {
            e.stopPropagation();
            $list.css('display', 'none');
        });
        $list.click(e => {
            e.stopPropagation();
            $list.css('display', 'flex');
        });
        $(this.container + " .font-element").click(e => {
            e.stopPropagation();
            this.setFont(e.target.getAttribute("data-font"));
            cb(e.target.getAttribute("data-font"));
        });
        $(this.container + " .list_reset").click(e => {
            e.stopPropagation();
            this.setFont(this.options.default);
            cb(this.getFont());
        });
    }
    getFont() {
        return this.font;
    }
    setFont(font) {
        this.font = font;
    }
    render() {
        const style = document.createElement("style");
        style.textContent = this.css();
        document.head.append(style);
        const $container = $(this.container);
        $container.append(this.html());
    }
    html() {
        let list = '';
        this.list.forEach(e => {
            list += `<div data-font="${e}" class="font-element" style="font-family: ${e}">${this.options.representative}</div>`;
        });
        return `
            <div class="list_wrapper">
                <div class="list_reset">Reset</div>
                ${list}
            </div>
        `;
    }
    css() {
        var _a;
        return `
            ${this.container} {
                position: relative;
            }
            ${this.container} .list_wrapper {
                display: flex;
                flex-direction: row;
                position: absolute;
                align-items: center;
                left: 110%;
                height: 70px;
                display: none;
                background: #fff;
                border-radius: 20px;
                padding: 10px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px;
                z-index: 1;
                width: 250px;
                overflow-y: hidden;
                overflow-x: auto;
            }
            ${this.container} .list_wrapper::-webkit-scrollbar {
                display: none;
            }
            ${this.container} .list_wrapper .list_reset {
                display: ${((_a = this.options) === null || _a === void 0 ? void 0 : _a.default) == null ? "none" : "flex"};
                justify-content: center;
                align-items: center;
                height: fit-content;
                padding-right: 10px;
            }
            ${this.container} .list_wrapper > .font-element {
                padding: 12px;
                font-size: 35px;
            }
        `;
    }
}
exports.Options = Options;
