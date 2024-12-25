"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.AddIntersectionObserver = exports.W4 = exports.W3 = exports.W2 = exports.W1 = void 0;
exports.$$ = $$;
const SearchUI_1 = __importDefault(require("./components/search/SearchUI"));
const RangeSlider_1 = require("./components/rangeSlider/RangeSlider");
const ColorPickerSingle_1 = __importDefault(require("./components/colorPicker/ColorPickerSingle"));
const ColorPickerDouble_1 = __importDefault(require("./components/colorPicker/ColorPickerDouble"));
const Options_1 = require("./components/options/Options");
const Transform_1 = __importDefault(require("./components/Transform/Transform"));
const UploadFile_1 = __importDefault(require("./components/upload/UploadFile"));
const TextEditor_1 = __importDefault(require("./components/textEditor/TextEditor"));
const client_1 = __importDefault(require("react-dom/client"));
function $$(ele1, ele2, ele3, ele4) {
    if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined) {
        return new W4(ele1, ele2, ele3, ele4);
    }
    else if (ele2 !== undefined && ele3 !== undefined) {
        return new W3(ele1, ele2, ele3);
    }
    else if (ele2 !== undefined) {
        return new W2(ele1, ele2);
    }
    else {
        return new W1(ele1);
    }
}
class W1 {
    constructor(ele1) {
        this.ele1 = ele1;
    }
    passShowHide() {
        return new PassShowHide(this.ele1);
    }
    transform() {
        return new Transform_1.default(this.ele1);
    }
    addSpinner() {
        return new Spinner(this.ele1);
    }
    share() {
        return new Share(this.ele1);
    }
    colorPickerSingle(cb, options) {
        return new ColorPickerSingle_1.default(this.ele1, cb, options);
    }
    colorPickerDouble(cb, options) {
        return new ColorPickerDouble_1.default(this.ele1, cb, options);
    }
    rangeSlider(cb, options) {
        return new RangeSlider_1.RangeSlider(this.ele1, cb, options);
    }
    options(cb, options) {
        return new Options_1.Options(this.ele1, cb, options);
    }
    uploadFile(cb) {
        return new UploadFile_1.default(this.ele1, cb);
    }
    textEditor(cb) {
        return new TextEditor_1.default(this.ele1, cb);
    }
}
exports.W1 = W1;
class W2 {
    constructor(ele1, ele2) {
        this.ele1 = ele1;
        this.ele2 = ele2;
    }
    copyToClipboard() {
        return new CopyToClipboard(this.ele1, this.ele2);
    }
    table() {
        return new Table(this.ele1, this.ele2);
    }
    search() {
        return new Search(this.ele1, this.ele2);
    }
    transform() {
        return new Transform_1.default(this.ele1, this.ele2);
    }
    reactMounting() {
        return new ReactMounting(this.ele1, this.ele2);
    }
}
exports.W2 = W2;
class W3 {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
    }
    transform() {
        return new Transform_1.default(this.ele1, this.ele2, this.ele3);
    }
    addIntersectionObserver() {
        return new AddIntersectionObserver(this.ele1, this.ele2, this.ele3);
    }
    toggle() {
        return new Toggle(this.ele1, this.ele2, this.ele3);
    }
}
exports.W3 = W3;
class W4 {
    constructor(ele1, ele2, ele3, ele4) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
    }
}
exports.W4 = W4;
class ReactMounting {
    constructor(element, jsx) {
        this.element = element;
        this.jsx = jsx;
        this.render();
    }
    render() {
        const parentElement = document.querySelector(this.element);
        if (!parentElement) {
            throw new Error("Target DOM element not found");
        }
        (client_1.default.createRoot(parentElement).render(this.jsx));
    }
}
class AddIntersectionObserver extends W3 {
    constructor(target, options, cb) {
        super(target, options, cb);
        this.target = document.querySelector(this.ele1);
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.ele3(entry.isIntersecting, this.count);
            });
        }, this.ele2);
        this.count = 0;
    }
    observe() {
        this.observer.observe(this.target);
        return this;
    }
    unobserve() {
        this.observer.unobserve(this.target);
        return this;
    }
    increaseCount() {
        this.count++;
    }
    resetCount() {
        this.count = 0;
    }
    getCount() {
        return this.count;
    }
}
exports.AddIntersectionObserver = AddIntersectionObserver;
class Share extends W1 {
    constructor(obj) {
        super(obj);
        this.run();
    }
    run() {
        if (navigator.share) {
            navigator.share(this.ele1);
        }
        else {
            alert("Share does not support this browser");
        }
    }
}
class Table extends W2 {
    constructor(location, header) {
        super(location, header);
        this.location = location;
        this.header = header;
    }
    addHeader() {
        $(this.location).append('<table><tr></tr></table>');
        for (const headerKey in this.header) {
            if (this.header.hasOwnProperty(headerKey)) {
                $(this.location + " table tr").append(`<th>${this.header[headerKey]}</th>`);
            }
        }
        return this;
    }
    addRow(data) {
        for (const dataKey in data) {
            let row = `<tr>`, eachData = data[dataKey];
            for (const eachKey in eachData) {
                row += `<th>${eachData[eachKey]}</th>`;
            }
            row += `</tr>`;
            $(this.location + " table").append(row);
        }
        return this;
    }
    empty() {
        $(this.location).empty();
        this.addHeader();
    }
}
exports.Table = Table;
class Spinner extends W1 {
    constructor(ele1) {
        super(ele1);
    }
    show() {
        $(this.ele1.querySelector(".loader")).addClass("spinner");
        return this;
    }
    hide() {
        $(this.ele1.querySelector(".loader")).removeClass("spinner");
        return this;
    }
    singleSpinner() {
        const styleElement = document.createElement("style");
        styleElement.textContent = `
        .spinner::after {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            border: 4px solid transparent;
            border-top-color: #000;
            border-radius: 50%;
            animation: spinner 1s linear infinite;
        }
        @keyframes spinner {
            from {
                transform: rotate(0turn);
            }
            to {
                transform: rotate(1turn);
            }
        }`;
        document.head.appendChild(styleElement);
        $(this.ele1).append(`<div class="loader"></div>`);
        $(this.ele1).css("position", "relative");
        return this;
    }
    gradientSpinner() {
        $(this.ele1).append(`<div class="loader spinner"></div>`);
        return this;
    }
}
class PassShowHide extends W1 {
    constructor(inputSelector) {
        super(inputSelector);
        this.inputSelector = inputSelector;
        this.$input = $(this.inputSelector);
    }
    run() {
        const inputWidth = this.$input.innerWidth();
        const inputHeight = this.$input.innerHeight();
        this.$input.wrap('<div style="position: relative;"></div>');
        this.$input.after(`<i class="fa-solid fa-eye eye" style="position: absolute; left: ${inputWidth - (18 + 3)}px; top: ${(inputHeight - 16) / 2}px; cursor: pointer; color: #333;"></i>`);
        const $eye = this.$input.next();
        $eye.on('click', () => {
            if (this.$input.attr('type') === "password") {
                this.$input.attr('type', 'text');
                $eye.css({ color: "green" });
            }
            else {
                this.$input.attr('type', 'password');
                $eye.css({ color: "#333" });
            }
        });
        return this;
    }
}
class Toggle extends W3 {
    constructor(ele1, ele2, ele3) {
        super(ele1, ele2, ele3);
    }
    default() {
        $(this.ele1).click((e) => {
            $(e.currentTarget).toggleClass(this.ele2);
        });
        return this;
    }
    disableScroll() {
        $("body").css({
            overflow: "hidden"
        });
    }
    enableScroll() {
        $("body").css({
            overflow: "auto"
        });
    }
    advanced() {
        if (this.ele2 === null) {
            throw new Error("showing element is not defined or rendered on DOM");
        }
        if (this.ele1.terminate === null) {
            throw new Error("terminating element is not defined or rendered on DOM");
        }
        else {
            this.ele1.trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if ($(this.ele2).hasClass(this.ele3)) {
                    this.enableScroll();
                    $(this.ele2).removeClass(this.ele3);
                }
                else {
                    this.disableScroll();
                    $(this.ele2).addClass(this.ele3);
                }
            });
        }
        if (this.ele1.terminate !== null) {
            document.addEventListener('click', e => {
                const target = e.target;
                if (this.ele1.terminate.includes(target)) {
                    this.enableScroll();
                    $(this.ele2).removeClass(this.ele3);
                }
            });
        }
        return this;
    }
    cancel() {
        $(this.ele1.trigger).off();
        $(this.ele1.terminate).off();
        $(this.ele2).off();
        $(document).off();
        return this;
    }
}
class CopyToClipboard extends W2 {
    constructor(ele1, ele2) {
        super(ele1, ele2);
    }
    run(cb) {
        $(this.ele2).click(() => {
            navigator.clipboard.writeText(this.ele1).then(() => {
                cb();
            });
        });
    }
}
class Search extends W2 {
    constructor(ele1, ele2) {
        super(ele1, ele2);
        this.searchUI = new SearchUI_1.default(this.ele1, this.ele2);
    }
}
