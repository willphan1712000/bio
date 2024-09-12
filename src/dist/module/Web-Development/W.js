import SearchUI from "./components/search/SearchUI";
import { RangeSlider } from "./components/rangeSlider/RangeSlider";
import ColorPickerSingle from "./components/colorPicker/ColorPickerSingle";
import ColorPickerDouble from "./components/colorPicker/ColorPickerDouble";
import { Options } from "./components/options/Options";
import Transform from "./components/Transform/Transform";
import UploadFile from "./components/upload/UploadFile";
export function $$(ele1, ele2, ele3, ele4) {
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
export class W1 {
    constructor(ele1) {
        this.ele1 = ele1;
    }
    passShowHide() {
        return new PassShowHide(this.ele1);
    }
    transform() {
        return new Transform(this.ele1);
    }
    addSpinner() {
        return new Spinner(this.ele1);
    }
    share() {
        return new Share(this.ele1);
    }
    colorPickerSingle(cb, options) {
        return new ColorPickerSingle(this.ele1, cb, options);
    }
    colorPickerDouble(cb, options) {
        return new ColorPickerDouble(this.ele1, cb, options);
    }
    rangeSlider(cb, options) {
        return new RangeSlider(this.ele1, cb, options);
    }
    options(cb, options) {
        return new Options(this.ele1, cb, options);
    }
    uploadFile(cb) {
        return new UploadFile(this.ele1, cb);
    }
}
export class W2 {
    constructor(ele1, ele2) {
        this.ele1 = ele1;
        this.ele2 = ele2;
    }
    toggle() {
        return new Toggle(this.ele1, this.ele2);
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
        return new Transform(this.ele1, this.ele2);
    }
}
export class W3 {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
    }
    transform() {
        return new Transform(this.ele1, this.ele2, this.ele3);
    }
    addIntersectionObserver() {
        return new AddIntersectionObserver(this.ele1, this.ele2, this.ele3);
    }
}
export class W4 {
    constructor(ele1, ele2, ele3, ele4) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
    }
}
export class AddIntersectionObserver extends W3 {
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
export class Table extends W2 {
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
class Spinner extends W1 {
    constructor(ele1) {
        super(ele1);
    }
    show() {
        $(this.ele1 + " .loader").addClass("spinner");
        return this;
    }
    hide() {
        $(this.ele1 + " .loader").removeClass("spinner");
        return this;
    }
    singleSpinner() {
        const styleElement = document.createElement("style");
        styleElement.textContent = `
        .spinner {
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
        }
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
class Toggle extends W2 {
    constructor(ele1, ele2) {
        super(ele1, ele2);
    }
    run() {
        $(this.ele1).click((e) => {
            $(e.currentTarget).toggleClass(this.ele2);
        });
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
        this.searchUI = new SearchUI(this.ele1, this.ele2);
    }
}
