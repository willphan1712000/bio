import SearchUI from "./components/search/SearchUI";
import ColorPicker from "./components/colorPicker/ColorPicker";
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
        return new Transform(this.ele1, undefined, undefined);
    }
    addSpinner() {
        return new Spinner(this.ele1);
    }
    share() {
        return new Share(this.ele1);
    }
    colorPicker(cb, options = null) {
        return new ColorPicker(this.ele1, cb, options);
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
    upload() {
        return new Upload(this.ele1, this.ele2);
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
class Upload extends W2 {
    constructor(ele1, ele2) {
        super(ele1, ele2);
        this.$ele1 = $(this.ele1);
        this.$ele2 = $(this.ele2);
    }
    openFile() {
        this.$ele1.click(e => {
            e.stopPropagation();
            this.$ele2.click();
        });
        return this;
    }
    fileHandling(e, cb) {
        var _a;
        const target = e.target;
        const file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (readerEvent) => {
                var _a;
                const imgElement = document.createElement("img");
                imgElement.src = (_a = readerEvent.target) === null || _a === void 0 ? void 0 : _a.result;
                imgElement.onload = (imgEvent) => {
                    cb(imgEvent.target.src);
                };
            };
        }
    }
    drawImage(e, x, y, scale, angle, canvasWidth, canvasHeight, containerWidth, containerHeight) {
        const canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Unable to get canvas context");
        }
        const ratioX = canvasWidth / containerWidth;
        const ratioY = canvasHeight / containerHeight;
        const finalX = x * ratioX;
        const finalY = y * ratioY;
        const midleWidth = e.width * ratioX;
        const midleHeight = e.height * ratioY;
        const finalWidth = e.width * ratioX * scale;
        const finalHeight = e.height * ratioY * scale;
        ctx.translate(finalX + midleWidth / 2, finalY + midleHeight / 2);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.drawImage(e, -finalWidth / 2, -finalHeight / 2, finalWidth, finalHeight);
        const srcEncoded = ctx.canvas.toDataURL(e).split(",")[1];
        return srcEncoded;
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
class Transform {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.collided = false;
        this.deleted = true;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.w = 0;
        this.h = 0;
        this.$ele2 = $(ele2);
        this.imgFrame = document.querySelector(ele2);
        this.controllerClassName = this.ele1.substring(1) + '--controller';
        this.isRotateOffScreen = false;
        this.thisObject = this;
        const img = document.querySelector(this.ele1 + " > img");
        this.ratio = img.width / img.height;
        this.css = `
            ${this.ele1} {
                position: absolute;
                transform-origin: top left;
                user-select: none;
            }
            ${this.ele1} > img {
                object-fit: contain;
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                z-index: 1;
                transform: translate(-50%, -50%)
            }
            .${this.controllerClassName}--container {
                position: absolute;
                transform-origin: top left;
                user-select: none;
            }
            .${this.controllerClassName} {
                position: absolute;
                user-select: none;
                border: solid 3px #6924d5;
                z-index: 1;
                top: 0;
                left: 0;
                transform: translate(-50%, -50%);
            }
            .${this.controllerClassName} .resize {
                background-color: #fff;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                transition: all .1s linear;
            }
            .${this.controllerClassName} .resize.show {
                background-color: #6924d5;
            }
            .${this.controllerClassName} .resize > .circle {
                background-color: #f0f0f0a8;
                position: absolute;
                top: -15px;
                left: -15px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                z-index: -1;
                visibility: hidden;
                transition: all .1s linear;
            }
            .${this.controllerClassName} .resize > .circle.show {
                visibility: visible;
            }
            .${this.controllerClassName} .resize.resize-topleft {
                position: absolute;
                top: -10px;
                left: -10px;
            }
            .${this.controllerClassName} .resize.resize-topright {
                position: absolute;
                top: -10px;
                right: -10px;
            }
            .${this.controllerClassName} .resize.resize-bottomleft {
                position: absolute;
                bottom: -10px;
                left: -10px;
            }
            .${this.controllerClassName} .resize.resize-bottomright {
                position: absolute;
                bottom: -10px;
                right: -10px;
            }
            .${this.controllerClassName} .rotate {
                position: absolute;
                top: -50px;
                left: calc(50% - 15px);
                width: 30px;
                height: 30px;
                background-color: #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .${this.controllerClassName} .delete {
                position: absolute;
                bottom: -50px;
                left: calc(50% + 40px);
                width: 30px;
                height: 30px;
                background-color: #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `;
        this.controllerTemplate = `
            <div class="${this.controllerClassName}--container">
                <div class="${this.controllerClassName}">
                    <div class="dot resize resize-topleft"><div class="circle"></div></div>
                    <div class="dot resize resize-topright"><div class="circle"></div></div>
                    <div class="dot resize resize-bottomleft"><div class="circle"></div></div>
                    <div class="dot resize resize-bottomright"><div class="circle"></div></div>
                    <div class="dot rotate"><i class="fa-solid fa-rotate"></i></div>
                    <div class="dot rotate shadow" style="visibility: hidden;"><i class="fa-solid fa-rotate"></i></div>
                    <div class="dot delete"><i class="fa-solid fa-trash"></i></div>
                    <div class="dot delete shadow" style="visibility: hidden;"><i class="fa-solid fa-trash"></i></div>
                </div>
            </div>
        `;
    }
    setRatio(r) {
        this.ratio = r;
    }
    setValue(x, y, angle, w, h) {
        this.x = x !== undefined ? x : this.x;
        this.y = y !== undefined ? y : this.y;
        this.angle = angle !== undefined ? angle : this.angle;
        this.w = w !== undefined ? w : this.w;
        this.h = h !== undefined ? h : this.h;
    }
    exportData() {
        return [this.x, this.y, this.angle, this.w, this.h];
    }
    isCollided() {
        return this.collided;
    }
    setIsCollided(is) {
        this.collided = is;
    }
    isDeleted() {
        return this.deleted;
    }
    setDeleted(is) {
        this.deleted = is;
    }
    addController() {
        this.$ele2.after(this.controllerTemplate);
        this.addCSSForController()
            .handleElementGoOffScreen("." + this.controllerClassName + " .rotate", "." + this.controllerClassName + " .rotate.shadow", "rotate")
            .handleElementGoOffScreen("." + this.controllerClassName + " .delete", "." + this.controllerClassName + " .delete.shadow", "delete");
        return this;
    }
    addCSSForController() {
        const styleElement = document.createElement('style');
        styleElement.textContent = this.css;
        document.head.appendChild(styleElement);
        return this;
    }
    delete(cb) {
        const handleDelete = (e) => {
            e.preventDefault();
            e.stopPropagation();
            cb();
            this.setDeleted(true);
        };
        $(this.ele1 + "--controller .delete").on("touchstart", handleDelete);
        $(this.ele1 + "--controller .delete").on("mousedown", handleDelete);
        return this;
    }
    repositionElement(x, y) {
        var _a, _b;
        const controllerWrapper = document.querySelector(this.ele1 + '--controller--container');
        const boxWrapper = document.querySelector(this.ele1);
        boxWrapper.style.left = x + 'px';
        boxWrapper.style.top = y + 'px';
        controllerWrapper.style.left = (x + (((_a = this.imgFrame) === null || _a === void 0 ? void 0 : _a.offsetLeft) || 0) + 3) + 'px';
        controllerWrapper.style.top = (y + (((_b = this.imgFrame) === null || _b === void 0 ? void 0 : _b.offsetTop) || 0) + 3) + 'px';
    }
    resize(w, h) {
        const controller = document.querySelector(this.ele1 + '--controller');
        const img = document.querySelector(this.ele1 + " > img");
        controller.style.width = w + 6 + 'px';
        controller.style.height = h + 6 + 'px';
        img.style.width = w + 'px';
    }
    rotateBox(deg) {
        const controllerWrapper = document.querySelector(this.ele1 + '--controller--container');
        const boxWrapper = document.querySelector(this.ele1);
        boxWrapper.style.transform = `rotate(${deg}deg)`;
        controllerWrapper.style.rotate = `${deg}deg`;
        controllerWrapper.querySelector(".delete").style.rotate = `${-deg}deg`;
    }
    handleElementGoOffScreen(main, shadow, type) {
        const mainEle = document.querySelector(main);
        const shadowEle = document.querySelector(shadow);
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    shadowEle.style.visibility = "visible";
                    shadowEle.style.left = mainEle.style.left;
                    shadowEle.style.top = mainEle.style.top;
                    if (type === "rotate") {
                        this.isRotateOffScreen = true;
                    }
                }
                else {
                    shadowEle.style.visibility = "hidden";
                    if (type === "rotate") {
                        this.isRotateOffScreen = false;
                    }
                }
            });
        }, options);
        observer.observe(mainEle);
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
