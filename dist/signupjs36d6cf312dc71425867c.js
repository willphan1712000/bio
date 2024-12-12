/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/client/src/dist/client/src/Web-Development/W.js":
/*!*********************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/W.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table = exports.AddIntersectionObserver = exports.W4 = exports.W3 = exports.W2 = exports.W1 = void 0;
exports.$$ = $$;
const SearchUI_1 = __importDefault(__webpack_require__(/*! ./components/search/SearchUI */ "./controllers/client/src/dist/client/src/Web-Development/components/search/SearchUI.js"));
const RangeSlider_1 = __webpack_require__(/*! ./components/rangeSlider/RangeSlider */ "./controllers/client/src/dist/client/src/Web-Development/components/rangeSlider/RangeSlider.js");
const ColorPickerSingle_1 = __importDefault(__webpack_require__(/*! ./components/colorPicker/ColorPickerSingle */ "./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerSingle.js"));
const ColorPickerDouble_1 = __importDefault(__webpack_require__(/*! ./components/colorPicker/ColorPickerDouble */ "./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerDouble.js"));
const Options_1 = __webpack_require__(/*! ./components/options/Options */ "./controllers/client/src/dist/client/src/Web-Development/components/options/Options.js");
const Transform_1 = __importDefault(__webpack_require__(/*! ./components/Transform/Transform */ "./controllers/client/src/dist/client/src/Web-Development/components/Transform/Transform.js"));
const UploadFile_1 = __importDefault(__webpack_require__(/*! ./components/upload/UploadFile */ "./controllers/client/src/dist/client/src/Web-Development/components/upload/UploadFile.js"));
const TextEditor_1 = __importDefault(__webpack_require__(/*! ./components/textEditor/TextEditor */ "./controllers/client/src/dist/client/src/Web-Development/components/textEditor/TextEditor.js"));
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
        return new Transform_1.default(this.ele1, this.ele2);
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
        this.searchUI = new SearchUI_1.default(this.ele1, this.ele2);
    }
}


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/WW.js":
/*!**********************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/WW.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$$$ = $$$;
const SignUpUI_1 = __importDefault(__webpack_require__(/*! ./components/signup/SignUpUI */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/SignUpUI.js"));
function $$$(ele1, ele2, ele3, ele4, ele5, ele6) {
    if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined && ele5 !== undefined && ele6 !== undefined) {
        return new WW6(ele1, ele2, ele3, ele4, ele5, ele6);
    }
    else if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined && ele5 !== undefined) {
        return new WW5(ele1, ele2, ele3, ele4, ele5);
    }
    else if (ele2 !== undefined && ele3 !== undefined && ele4 !== undefined) {
        return new WW4(ele1, ele2, ele3, ele4);
    }
    else if (ele2 !== undefined && ele3 !== undefined) {
        return new WW3(ele1, ele2, ele3);
    }
    else if (ele2 !== undefined) {
        return new WW2(ele1, ele2);
    }
    else {
        return new WW1(ele1);
    }
}
class WW1 {
    constructor(ele1) {
        this.ele1 = ele1;
    }
}
class WW2 {
    constructor(ele1, ele2) {
        this.ele1 = ele1;
        this.ele2 = ele2;
    }
    api() {
        return new API(this.ele1, this.ele2);
    }
}
class WW3 {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
    }
    signup() {
        return new Signup(this.ele1, this.ele2, this.ele3);
    }
}
class WW4 {
    constructor(ele1, ele2, ele3, ele4) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
    }
}
class WW5 {
    constructor(ele1, ele2, ele3, ele4, ele5) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
        this.ele5 = ele5;
    }
    formValidate() {
        return new FormValidate(this.ele1, this.ele2, this.ele3, this.ele4, this.ele5);
    }
}
class WW6 {
    constructor(ele1, ele2, ele3, ele4, ele5, ele6) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.ele3 = ele3;
        this.ele4 = ele4;
        this.ele5 = ele5;
        this.ele6 = ele6;
    }
}
class FormValidate extends WW5 {
    constructor(input, msg, success, error, regex) {
        super(input, msg, success, error, regex);
        this.input = input;
        this.msg = msg;
        this.success = success;
        this.error = error;
        this.regex = regex;
        this.isValid = true;
    }
    setValidity(value) {
        this.isValid = value;
    }
    getValidity() {
        return this.isValid;
    }
    phoneFormat() {
        $(this.input).on("input", (event) => {
            const inputValue = event.target.value.replace(/\D/g, '');
            let formattedValue = '';
            for (let i = 0; i < inputValue.length; i++) {
                if (i === 3 || i === 6) {
                    formattedValue += '-';
                }
                formattedValue += inputValue[i];
            }
            event.target.value = formattedValue;
        });
    }
    run() {
        const regex = new RegExp(this.regex);
        $(this.input).on("input", (e) => {
            const target = e.target;
            if (target.value !== '') {
                if (regex.test(target.value)) {
                    this.setValidity(true);
                    $(this.msg).html(this.success);
                }
                else {
                    this.setValidity(false);
                    $(this.msg).html(this.error);
                }
            }
            else {
                $(this.msg).html('');
                this.setValidity(true);
            }
        });
        return this;
    }
}
class Signup extends WW3 {
    constructor(ui, url, success) {
        super(ui, url, success);
        this.signUpUI = new SignUpUI_1.default(ui, url, success);
    }
}
class API extends WW2 {
    constructor(src, data) {
        super(src, data);
    }
    get() {
        return new Promise((res, rej) => {
            $.ajax({
                url: this.ele1,
                method: "GET",
                dataType: "json",
                contentType: "application/json",
                success: (e) => {
                    res(e);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    rej(new Error(`AJAX request failed: ${textStatus}, ${errorThrown}`));
                }
            });
        });
    }
    post() {
        return new Promise((res, rej) => {
            $.ajax({
                url: this.ele1,
                method: "POST",
                data: JSON.stringify(this.ele2),
                dataType: "json",
                contentType: "application/json",
                success: (e) => {
                    res(e);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    rej(new Error(`AJAX request failed: ${textStatus}, ${errorThrown}`));
                }
            });
        });
    }
}


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/Transform/Transform.js":
/*!**************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/Transform/Transform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TransformController_1 = __importDefault(__webpack_require__(/*! ./TransformController */ "./controllers/client/src/dist/client/src/Web-Development/components/Transform/TransformController.js"));
class Transform {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1,
            this.ele2 = ele2,
            this.collided = false;
        this.deleted = true;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.w = 0;
        this.h = 0;
        this.$ele2 = $(this.ele2);
        this.imgFrame = document.querySelector(this.ele2);
        this.controllerClassName = this.ele1.substring(1) + '--controller';
        this.isRotateOffScreen = false;
        this.img = document.querySelector(this.ele1 + " > img");
        this.ratio = this.img.width / this.img.height;
        this.transformController = new TransformController_1.default(this.ele1, this.ele2, this.controllerClassName);
        this.reset();
        this.transformController.addController();
        this.transform();
        this.handleElementGoOffScreen("." + this.controllerClassName + " .rotate", "." + this.controllerClassName + " .rotate.shadow", "rotate").handleElementGoOffScreen("." + this.controllerClassName + " .delete", "." + this.controllerClassName + " .delete.shadow", "delete");
    }
    reset() {
        $(this.ele1 + "--controller--container").remove();
        document.querySelector(this.ele1).style.transform = `rotate(${0}deg)`;
    }
    setValue(x, y, angle, w, h) {
        this.x = (x !== undefined) ? x : this.x;
        this.y = (y !== undefined) ? y : this.y;
        this.angle = (angle !== undefined) ? angle : this.angle;
        this.w = (w !== undefined) ? w : this.w;
        this.h = (h !== undefined) ? h : this.h;
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
    delete(cb) {
        const handleDelete = (e) => {
            e.preventDefault();
            e.stopPropagation();
            cb();
            this.setDeleted(true);
        };
        $(this.ele1 + "--controller .delete").on("touchstart", e => handleDelete(e));
        $(this.ele1 + "--controller .delete").on("mousedown", e => handleDelete(e));
        return this;
    }
    repositionElement(x, y) {
        const controllerWrapper = document.querySelector(this.ele1 + '--controller--container');
        const boxWrapper = document.querySelector(this.ele1);
        boxWrapper.style.left = x + 'px';
        boxWrapper.style.top = y + 'px';
        controllerWrapper.style.left = (x + this.imgFrame.offsetLeft + 3) + 'px';
        controllerWrapper.style.top = (y + this.imgFrame.offsetTop + 3) + 'px';
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
        const deleteEle = controllerWrapper.querySelector(".delete");
        boxWrapper.style.transform = `rotate(${deg}deg)`;
        controllerWrapper.style.rotate = `${deg}deg`;
        deleteEle.style.rotate = `${-deg}deg`;
    }
    handleElementGoOffScreen(main, shadow, type) {
        const mainEle = document.querySelector(main);
        const shadowEle = document.querySelector(shadow);
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };
        const callback = (entries) => {
            entries.forEach((entry) => {
                switch (type) {
                    case 'rotate':
                        if (!entry.isIntersecting) {
                            mainEle.style.top = "auto";
                            mainEle.style.bottom = "-50px";
                            this.isRotateOffScreen = true;
                        }
                        else {
                            mainEle.style.bottom = "auto";
                            mainEle.style.top = "-50px";
                            this.isRotateOffScreen = false;
                        }
                        break;
                    case 'delete':
                        if (!entry.isIntersecting) {
                            mainEle.style.bottom = "auto";
                            mainEle.style.top = "-50px";
                        }
                        else {
                            mainEle.style.top = "auto";
                            mainEle.style.bottom = "-50px";
                        }
                        break;
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(shadowEle);
        return this;
    }
    transform() {
        const controller = document.querySelector(this.ele1 + '--controller');
        const controllerWrapper = document.querySelector(this.ele1 + '--controller--container');
        const boxWrapper = document.querySelector(this.ele1);
        const minWidth = 40;
        const minHeight = 40;
        var initX, initY, mousePressX, mousePressY, initW, initH, initRotate;
        function getCurrentRotation(el) {
            var st = window.getComputedStyle(el, null);
            var tm = st.getPropertyValue("-webkit-transform") ||
                st.getPropertyValue("-moz-transform") ||
                st.getPropertyValue("-ms-transform") ||
                st.getPropertyValue("-o-transform") ||
                st.getPropertyValue("transform");
            "none";
            if (tm != "none") {
                var values = tm.split('(')[1].split(')')[0].split(',');
                var angle = Math.round(Math.atan2(Number(values[1]), Number(values[0])) * (180 / Math.PI));
                return (angle < 0 ? angle + 360 : angle);
            }
            return 0;
        }
        function mousedownCb(event) {
            event.target.classList.add("show");
            event.target.querySelector(".circle").classList.add("show");
        }
        function mouseupCb(event) {
            event.target.classList.remove("show");
            event.target.querySelector(".circle").classList.remove("show");
        }
        const handleDrag = (event, type) => {
            event.preventDefault();
            event.stopPropagation();
            let initX = boxWrapper.offsetLeft;
            let initY = boxWrapper.offsetTop;
            let mousePressX = (type === 'desk') ? event.clientX : event.touches[0].clientX;
            let mousePressY = (type === 'desk') ? event.clientY : event.touches[0].clientY;
            let [, , , w, h] = this.exportData();
            const eventMoveHandler = (event) => {
                let x = (type === 'desk') ? event.clientX : event.touches[0].clientX;
                let y = (type === 'desk') ? event.clientY : event.touches[0].clientY;
                var posX = initX + (x - mousePressX);
                var posY = initY + (y - mousePressY);
                this.repositionElement(posX, posY);
                this.setValue(posX - w / 2, posY - h / 2, undefined, undefined, undefined);
            };
            if (type === 'desk') {
                controllerWrapper.addEventListener('mousemove', eventMoveHandler, false);
                window.addEventListener('mouseup', function eventEndHandler() {
                    controllerWrapper.removeEventListener('mousemove', eventMoveHandler, false);
                    window.removeEventListener('mouseup', eventEndHandler);
                }, false);
            }
            else {
                controllerWrapper.addEventListener('touchmove', eventMoveHandler, false);
                window.addEventListener('touchend', function eventEndHandler() {
                    controllerWrapper.removeEventListener('touchmove', eventMoveHandler, false);
                    window.removeEventListener('touchend', eventEndHandler);
                }, false);
            }
        };
        controllerWrapper.addEventListener('mousedown', e => handleDrag(e, 'desk'), false);
        controllerWrapper.addEventListener('touchstart', e => handleDrag(e, 'touch'), false);
        var leftTop = document.querySelector(this.ele1 + "--controller .resize-topleft");
        var rightTop = document.querySelector(this.ele1 + "--controller .resize-topright");
        var rightBottom = document.querySelector(this.ele1 + "--controller .resize-bottomright");
        var leftBottom = document.querySelector(this.ele1 + "--controller .resize-bottomleft");
        const resizeHandler = (event, left = false, top = false, xResize = false, yResize = false, type) => {
            event.preventDefault();
            event.stopPropagation();
            initX = boxWrapper.offsetLeft;
            initY = boxWrapper.offsetTop;
            mousePressX = (type === 'desk') ? event.clientX : event.touches[0].clientX;
            mousePressY = (type === 'desk') ? event.clientY : event.touches[0].clientY;
            initW = this.img.offsetWidth;
            initH = this.img.offsetHeight;
            initRotate = getCurrentRotation(boxWrapper);
            var initRadians = initRotate * Math.PI / 180;
            var cosFraction = Math.cos(initRadians);
            var sinFraction = Math.sin(initRadians);
            mousedownCb(event);
            var vectorC = [mousePressX - initX - this.imgFrame.offsetLeft, mousePressY - initY - this.imgFrame.offsetTop];
            const eventMoveHandler = (event) => {
                var x = ((type === 'desk') ? event.clientX : event.touches[0].clientX);
                var y = ((type === 'desk') ? event.clientY : event.touches[0].clientY);
                var wDiff = x - mousePressX;
                var hDiff = y - mousePressY;
                var vectorD = [wDiff, hDiff];
                const c = (vectorC[0] * vectorD[0] + vectorC[1] * vectorD[1]) / (vectorC[0] * vectorC[0] + vectorC[1] * vectorC[1]);
                var vectorH = [c * vectorC[0], c * vectorC[1]];
                var rotatedWDiff = cosFraction * vectorH[0] + sinFraction * vectorH[1];
                var rotatedHDiff = cosFraction * vectorH[1] - sinFraction * vectorH[0];
                rotatedHDiff = (rotatedHDiff * rotatedWDiff > 0) ? (rotatedWDiff / this.ratio) : (-rotatedWDiff / this.ratio);
                var newW = initW, newH = initH, newX = initX, newY = initY;
                if (xResize) {
                    if (left) {
                        newW = initW - rotatedWDiff;
                        if (newW < minWidth) {
                            newW = minWidth;
                            rotatedWDiff = initW - minWidth;
                        }
                    }
                    else {
                        newW = initW + rotatedWDiff;
                        if (newW < minWidth) {
                            newW = minWidth;
                            rotatedWDiff = minWidth - initW;
                        }
                    }
                    newX += 0.5 * rotatedWDiff * cosFraction;
                    newY += 0.5 * rotatedWDiff * sinFraction;
                }
                if (yResize) {
                    if (top) {
                        newH = initH - rotatedHDiff;
                        if (newH < minHeight) {
                            newH = minHeight;
                            rotatedHDiff = initH - minHeight;
                        }
                    }
                    else {
                        newH = initH + rotatedHDiff;
                        if (newH < minHeight) {
                            newH = minHeight;
                            rotatedHDiff = minHeight - initH;
                        }
                    }
                    newX -= 0.5 * rotatedHDiff * sinFraction;
                    newY += 0.5 * rotatedHDiff * cosFraction;
                }
                this.resize(newW, newH);
                this.repositionElement(newX, newY);
                this.setValue(newX - newW / 2, newY - newH / 2, undefined, newW, newH);
            };
            if (type === 'desk') {
                window.addEventListener('mousemove', eventMoveHandler, false);
                window.addEventListener('mouseup', function eventEndHandler() {
                    mouseupCb(event);
                    window.removeEventListener('mousemove', eventMoveHandler, false);
                    window.removeEventListener('mouseup', eventEndHandler);
                }, false);
            }
            else {
                window.addEventListener('touchmove', eventMoveHandler, false);
                window.addEventListener('touchend', function eventEndHandler() {
                    mouseupCb(event);
                    window.removeEventListener('touchmove', eventMoveHandler, false);
                    window.removeEventListener('touchend', eventEndHandler);
                }, false);
            }
        };
        leftTop.addEventListener('mousedown', e => resizeHandler(e, true, true, true, true, 'desk'));
        rightTop.addEventListener('mousedown', e => resizeHandler(e, false, true, true, true, 'desk'));
        rightBottom.addEventListener('mousedown', e => resizeHandler(e, false, false, true, true, 'desk'));
        leftBottom.addEventListener('mousedown', e => resizeHandler(e, true, false, true, true, 'desk'));
        leftTop.addEventListener('touchstart', e => resizeHandler(e, true, true, true, true, 'touch'));
        rightTop.addEventListener('touchstart', e => resizeHandler(e, false, true, true, true, 'touch'));
        rightBottom.addEventListener('touchstart', e => resizeHandler(e, false, false, true, true, 'touch'));
        leftBottom.addEventListener('touchstart', e => resizeHandler(e, true, false, true, true, 'touch'));
        var rotate = document.querySelector(this.ele1 + "--controller .rotate");
        const handleRotate = (event, type) => {
            event.preventDefault();
            event.stopPropagation();
            initX = event.target.offsetLeft;
            initY = event.target.offsetTop;
            mousePressX = (type === 'desk') ? event.clientX : event.touches[0].clientX;
            mousePressY = (type === 'desk') ? event.clientY : event.touches[0].clientY;
            var arrow = document.querySelector(this.ele1 + '--controller');
            var arrowRects = arrow.getBoundingClientRect();
            var arrowX = arrowRects.left + arrowRects.width / 2;
            var arrowY = arrowRects.top + arrowRects.height / 2;
            const compensation = this.isRotateOffScreen ? 180 : 0;
            const eventMoveHandler = (event) => {
                let x = (type === 'desk') ? event.clientX : event.touches[0].clientX;
                let y = (type === 'desk') ? event.clientY : event.touches[0].clientY;
                var angle = Math.atan2(y - arrowY, x - arrowX) + Math.PI / 2;
                angle *= 180 / Math.PI;
                angle += compensation;
                this.rotateBox(angle);
                this.setValue(undefined, undefined, angle, undefined, undefined);
            };
            if (type === 'desk') {
                window.addEventListener('mousemove', eventMoveHandler, false);
                window.addEventListener('mouseup', function eventEndHandler() {
                    window.removeEventListener('mousemove', eventMoveHandler, false);
                    window.removeEventListener('mouseup', eventEndHandler);
                }, false);
            }
            else {
                window.addEventListener('touchmove', eventMoveHandler, false);
                window.addEventListener('touchend', function eventEndHandler() {
                    window.removeEventListener('touchmove', eventMoveHandler, false);
                    window.removeEventListener('touchend', eventEndHandler);
                }, false);
            }
        };
        rotate.addEventListener('mousedown', e => handleRotate(e, 'desk'), false);
        rotate.addEventListener('touchstart', e => handleRotate(e, 'touch'), false);
        this.resize(200, 200 / this.ratio);
        this.repositionElement(100, 100 / this.ratio);
        this.setValue(0, 0, 0, 200, 200 / this.ratio);
        return this;
    }
}
exports["default"] = Transform;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/Transform/TransformController.js":
/*!************************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/Transform/TransformController.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class TransformController {
    constructor(wrapper, frame, controller) {
        this.wrapper = wrapper;
        this.frame = frame;
        this.controller = controller;
    }
    addController() {
        const styleElement = document.createElement('style');
        styleElement.textContent = this.css();
        document.head.appendChild(styleElement);
        $(this.frame).after(this.controllerTemplate());
    }
    css() {
        return `
        ${this.wrapper} {
            position: absolute;
            transform-origin: top left;
            user-select: none;
        }
        ${this.wrapper} > img {
            object-fit: contain;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            z-index: 1;
            transform: translate(-50%, -50%)
        }
        .${this.controller}--container {
            position: absolute;
            transform-origin: top left;
            user-select: none;
        }
        .${this.controller} {
            position: absolute;
            user-select: none;
            border: solid 3px #6924d5;
            z-index: 1;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
        }
        .${this.controller} .resize {
            background-color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: all .1s linear;
        }
        .${this.controller} .resize.show {
            background-color: #6924d5;
        }
        .${this.controller} .resize > .circle {
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
        .${this.controller} .resize > .circle.show {
            visibility: visible;
        }
        .${this.controller} .resize.resize-topleft {
            position: absolute;
            top: -10px;
            left: -10px;
        }
        .${this.controller} .resize.resize-topright {
            position: absolute;
            top: -10px;
            right: -10px;
        }
        .${this.controller} .resize.resize-bottomleft {
            position: absolute;
            bottom: -10px;
            left: -10px;
        }
        .${this.controller} .resize.resize-bottomright {
            position: absolute;
            bottom: -10px;
            right: -10px;
        }
        .${this.controller} .rotate {
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
        .${this.controller} .delete {
            position: absolute;
            bottom: -50px;
            left: calc(50% + 40px);
            width: 30px;
            height: 30px;
            background-color: #fff;
            border-radius: 50%;
            display: none;
            justify-content: center;
            align-items: center;
        }
    `;
    }
    controllerTemplate() {
        return `
            <div class="${this.controller}--container">
                <div class="${this.controller}">
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
}
exports["default"] = TransformController;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerDouble.js":
/*!************************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerDouble.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ColorPickerParent_1 = __webpack_require__(/*! ./ColorPickerParent */ "./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerParent.js");
class ColorPickerDouble extends ColorPickerParent_1.ColorPickerParent {
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
exports["default"] = ColorPickerDouble;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerParent.js":
/*!************************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerParent.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorPickerParent = void 0;
class ColorPickerParent {
    clickBehavior(container) {
        const $container = $(container);
        const $colorPicker = $(container + " .colorPickerBox");
        $container.click(e => {
            e.stopPropagation();
            if ($colorPicker.css('display') === 'none') {
                $colorPicker.css('display', 'flex');
            }
            else {
                $colorPicker.css('display', 'none');
            }
        });
        $("body").click(e => {
            e.stopPropagation();
            $colorPicker.css('display', 'none');
        });
        $colorPicker.click(e => {
            e.stopPropagation();
            $colorPicker.css('display', 'flex');
        });
    }
    hslToHex(h, s, l) {
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        let m = l - c / 2;
        let r, g, b;
        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        }
        else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        }
        else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        }
        else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        }
        else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        }
        else {
            r = c;
            g = 0;
            b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
}
exports.ColorPickerParent = ColorPickerParent;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerSingle.js":
/*!************************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerSingle.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ColorPickerParent_1 = __webpack_require__(/*! ./ColorPickerParent */ "./controllers/client/src/dist/client/src/Web-Development/components/colorPicker/ColorPickerParent.js");
class ColorPickerSingle extends ColorPickerParent_1.ColorPickerParent {
    constructor(container, cb, options) {
        super();
        this.options = options;
        this.container = container;
        this.color = options.default;
        this.render();
        this.clickBehavior(this.container);
        const color = document.querySelector(this.container + " #color");
        color.addEventListener("input", e => {
            const input = e.target;
            this.setColor(input.value);
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
        this.color = this.hslToHex(Number(color), 100, 80);
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
                    <input id="color" class="color" type="range" min="0" max="360" value="0">
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
            ${this.container} .colorPickerBox .color {
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
exports["default"] = ColorPickerSingle;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/options/Options.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/options/Options.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Options = void 0;
class Options {
    constructor(container, cb, options) {
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


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/rangeSlider/RangeSlider.js":
/*!******************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/rangeSlider/RangeSlider.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/search/DataUI.js":
/*!********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/search/DataUI.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const WW_1 = __webpack_require__(/*! ../../WW */ "./controllers/client/src/dist/client/src/Web-Development/WW.js");
class DataUI {
    constructor(url) {
        this.url = url;
    }
    getData(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, WW_1.$$$)(this.url, options).api().post();
            for (const i in data) {
                data[i].a = '<a target="_blank" href="/' + data[i].username + '" style="color: #000;">Bio</a>';
                data[i].admin = '<a target="_blank" href="/' + data[i].username + '/admin" style="color: #000;">Admin</a>';
                data[i].delete = '<button value="' + data[i].username + '">Delete</button>';
            }
            return data;
        });
    }
}
exports["default"] = DataUI;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/search/InputUI.js":
/*!*********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/search/InputUI.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class InputUI {
    constructor(input, searchUI) {
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
exports["default"] = InputUI;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/search/SearchUI.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/search/SearchUI.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DataUI_1 = __importDefault(__webpack_require__(/*! ./DataUI */ "./controllers/client/src/dist/client/src/Web-Development/components/search/DataUI.js"));
const InputUI_1 = __importDefault(__webpack_require__(/*! ./InputUI */ "./controllers/client/src/dist/client/src/Web-Development/components/search/InputUI.js"));
const TableUI_1 = __importDefault(__webpack_require__(/*! ./TableUI */ "./controllers/client/src/dist/client/src/Web-Development/components/search/TableUI.js"));
class SearchUI {
    constructor(input, tableProps) {
        this.inputUI = new InputUI_1.default(input, this);
        this.tableUI = new TableUI_1.default(tableProps.container, tableProps.header, tableProps.target, tableProps.limit, tableProps.like, tableProps.url, tableProps.html);
        this.dataUI = new DataUI_1.default(tableProps.url);
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            this.table = yield this.tableUI.initilize();
            this.observer = this.tableUI.addObserver(this.table);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const v = this.inputUI.getValue();
            const data = yield this.dataUI.getData({
                limit: this.tableUI.getLimit(),
                like: v
            });
            if (v === "") {
                (_a = this.observer) === null || _a === void 0 ? void 0 : _a.resetCount();
                (_b = this.observer) === null || _b === void 0 ? void 0 : _b.observe();
            }
            else {
                (_c = this.observer) === null || _c === void 0 ? void 0 : _c.unobserve();
            }
            (_d = this.table) === null || _d === void 0 ? void 0 : _d.empty();
            this.tableUI.addRow(this.table, data, true);
        });
    }
}
exports["default"] = SearchUI;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/search/TableUI.js":
/*!*********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/search/TableUI.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const W_1 = __webpack_require__(/*! ../../W */ "./controllers/client/src/dist/client/src/Web-Development/W.js");
const WW_1 = __webpack_require__(/*! ../../WW */ "./controllers/client/src/dist/client/src/Web-Development/WW.js");
const DataUI_1 = __importDefault(__webpack_require__(/*! ./DataUI */ "./controllers/client/src/dist/client/src/Web-Development/components/search/DataUI.js"));
class TableUI {
    constructor(container, header, target, limit, like, url, html) {
        this.tableContainer = container;
        this.target = target;
        this.limit = limit;
        this.like = like;
        this.header = header;
        this.dataUI = new DataUI_1.default(url);
        this.html = html;
    }
    getLimit() {
        return this.limit;
    }
    setLimit(limit) {
        this.limit = limit;
    }
    initilize() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataUI.getData({
                limit: this.limit,
                like: this.like
            });
            const table = (0, W_1.$$)(this.tableContainer, this.header).table().addHeader();
            this.addRow(table, data, false);
            return table;
        });
    }
    addObserver(table) {
        const limit = this.limit;
        const o = (0, W_1.$$)(this.target, {
            threshold: 1
        }, (e) => __awaiter(this, void 0, void 0, function* () {
            if (e) {
                o.increaseCount();
                const data = yield this.dataUI.getData({
                    limit,
                    offset: limit * o.getCount()
                });
                this.addRow(table, data, true);
            }
        })).addIntersectionObserver().observe();
        return o;
    }
    addRow(table, data, search) {
        table.addRow(data);
        this.handleClick(search);
    }
    handleClick(search) {
        const html = this.html;
        if (search) {
            $(html.button).off("click", e => {
                return null;
            });
            $(html.confirm).off("click", e => {
                return null;
            });
            $(html.back).off("click", e => {
                return null;
            });
        }
        $(html.button).click(function (e) {
            $(html.parent).addClass("active");
            let currentUsernameElement = e.currentTarget;
            let currentUsernameValue = "";
            currentUsernameValue = currentUsernameElement.value;
            $(html.confirm).click(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const r = yield (0, WW_1.$$$)("/data/api/deleteAccount.php", {
                        username: currentUsernameValue,
                    }).api().post();
                    if (r) {
                        location.reload();
                    }
                });
            });
            $(html.back).click(() => {
                $(html.parent).removeClass("active");
                currentUsernameValue = "";
            });
        });
    }
}
exports["default"] = TableUI;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/CheckBox.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/CheckBox.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CheckBox {
    constructor(checkbox, signUpUI) {
        this.$checkbox = $(checkbox);
        this.$checkbox.on("change", e => {
            signUpUI.update();
        });
    }
    isChecked() {
        return this.$checkbox.is(':checked');
    }
}
exports["default"] = CheckBox;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Email.js":
/*!*******************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Email.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Email {
    constructor(email, signUpUI) {
        this.$email = $(email);
        this.$email.on("input", e => {
            signUpUI.update();
        });
    }
    getEmail() {
        return this.$email.val();
    }
}
exports["default"] = Email;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Error.js":
/*!*******************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Error.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Error {
    constructor(error) {
        this.$error = $(error);
    }
    setError(msg) {
        this.$error.html(msg);
    }
}
exports["default"] = Error;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Password.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Password.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Password {
    constructor(password, signUpUI) {
        this.$password = $(password);
        this.$password.on("input", e => {
            signUpUI.update();
        });
    }
    getPassword() {
        return this.$password.val();
    }
}
exports["default"] = Password;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Register.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Register.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Register {
    constructor(register, signUpUI) {
        this.$register = $(register);
        this.isEnabled = false;
        this.isDisabledHandling();
        this.$register.click((e) => {
            e.preventDefault();
            signUpUI.signup();
        });
    }
    enabled(is) {
        this.isEnabled = is;
        if (this.isEnabled) {
            this.isEnabledHandling();
        }
        else {
            this.isDisabledHandling();
        }
    }
    isEnabledHandling() {
        this.$register.prop('disabled', false);
        this.$register.css({
            "backgroundColor": "#cec3e7"
        });
    }
    isDisabledHandling() {
        this.$register.prop('disabled', true);
        this.$register.css({
            "backgroundColor": "#c6c6c6"
        });
    }
}
exports["default"] = Register;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/SignUpUI.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/SignUpUI.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const WW_1 = __webpack_require__(/*! ../../WW */ "./controllers/client/src/dist/client/src/Web-Development/WW.js");
const CheckBox_1 = __importDefault(__webpack_require__(/*! ./CheckBox */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/CheckBox.js"));
const Email_1 = __importDefault(__webpack_require__(/*! ./Email */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Email.js"));
const Error_1 = __importDefault(__webpack_require__(/*! ./Error */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Error.js"));
const Password_1 = __importDefault(__webpack_require__(/*! ./Password */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Password.js"));
const Register_1 = __importDefault(__webpack_require__(/*! ./Register */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Register.js"));
const Username_1 = __importDefault(__webpack_require__(/*! ./Username */ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Username.js"));
class SignUpUI {
    constructor(ui, url, success) {
        this.usernameBox = new Username_1.default(ui['username'], this);
        this.passwordBox = new Password_1.default(ui['password'], this);
        this.emailBox = new Email_1.default(ui['email'], this);
        this.checkBox = new CheckBox_1.default(ui['checkbox'], this);
        this.error = new Error_1.default(ui['error']);
        this.register = new Register_1.default(ui['register'], this);
        this.url = url;
        this.success = success;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const userExist = yield (0, WW_1.$$$)(this.url.userExist, {
                username: this.usernameBox.getUsername(),
            }).api().post();
            const validEmail = yield (0, WW_1.$$$)(this.url.validEmail, {
                email: this.emailBox.getEmail(),
            }).api().post();
            const validPassword = yield (0, WW_1.$$$)(this.url.validPassword, {
                password: this.passwordBox.getPassword(),
            }).api().post();
            if (!userExist.success) {
                this.error.setError("Username exists");
            }
            else if (!this.usernameBox.isFilled()) {
                this.error.setError("Please enter username");
            }
            else if (!validEmail.success) {
                this.error.setError(validEmail.error);
            }
            else if (!validPassword.success) {
                this.error.setError(validPassword.error);
            }
            else if (!this.checkBox.isChecked()) {
                this.error.setError("Please check terms and conditions");
            }
            else {
                this.error.setError(`<i style="color: green;
                                border: solid green 1px;
                                border-radius: 50%;
                                padding: 10px;
                                width: 30px;
                                height: 30px;
                                display: flex;
                                justify-content: center;
                                align-items: center;" class="fa-solid fa-check"></i>`);
            }
            this.register.enabled(userExist.success && this.usernameBox.isFilled() && validPassword.success && validEmail.success && this.checkBox.isChecked());
        });
    }
    signup() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield (0, WW_1.$$$)(this.url.signup, {
                username: this.usernameBox.getUsername(),
                password: this.passwordBox.getPassword(),
                email: this.emailBox.getEmail()
            }).api().post();
            if (r) {
                $(this.success.before).addClass(this.success.beforeClass);
                $(this.success.after).addClass(this.success.afterClass);
            }
        });
    }
}
exports["default"] = SignUpUI;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/signup/Username.js":
/*!**********************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/signup/Username.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Username {
    constructor(username, signUpUI) {
        this.$username = $(username);
        this.$username.on("input", e => {
            signUpUI.update();
        });
    }
    getUsername() {
        return this.removeSpace(this.$username.val());
    }
    isFilled() {
        return this.$username.val() !== "";
    }
    removeSpace(text) {
        return text.replace(/\s+/g, '');
    }
}
exports["default"] = Username;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/textEditor/TextEditor.js":
/*!****************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/textEditor/TextEditor.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class TextEditor {
    constructor(element, cb) {
        this.element = element;
        const elementHtml = document.querySelector(this.element);
        this.text = elementHtml.textContent;
        elementHtml.contentEditable = 'true';
        elementHtml.addEventListener("input", e => {
            this.setText(elementHtml.textContent);
            cb(elementHtml.textContent);
        });
    }
    setText(text) {
        this.text = text;
    }
    getText() {
        return this.text;
    }
}
exports["default"] = TextEditor;


/***/ }),

/***/ "./controllers/client/src/dist/client/src/Web-Development/components/upload/UploadFile.js":
/*!************************************************************************************************!*\
  !*** ./controllers/client/src/dist/client/src/Web-Development/components/upload/UploadFile.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class UploadFile {
    constructor(ele1, cb) {
        this.$ele1 = $(ele1);
        this.$ele1.after(`<input type="file" id="" name="" hidden>`);
        this.$ele2 = this.$ele1.siblings('input');
        this.openFile();
        this.$ele2.on("input", e => {
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
        });
    }
    openFile() {
        this.$ele1.click(e => {
            e.stopPropagation();
            this.$ele2.click();
        });
    }
    createCanvas(width, height) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        return [canvas, ctx];
    }
    drawImage(e, ctx, x, y, scale, angle, canvas, containerWidth, containerHeight) {
        const ratioX = canvas.width / containerWidth;
        const ratioY = canvas.height / containerHeight;
        let finalX = x * ratioX;
        let finalY = y * ratioY;
        let midleWidth = e.width * ratioX;
        let midleHeight = e.height * ratioY;
        let finalWidth = e.width * ratioX * scale;
        let finalHeight = e.height * ratioY * scale;
        ctx.save();
        ctx.translate(finalX + midleWidth / 2, finalY + midleHeight / 2);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.drawImage(e, -finalWidth / 2, -finalHeight / 2, finalWidth, finalHeight);
        ctx.restore();
        const src = ctx.canvas.toDataURL(e);
        const srcEncoded = ctx.canvas.toDataURL(e).split(",")[1];
        return [ctx, src, srcEncoded];
    }
    drawColor(type, color, ctx, width, ratio) {
        if (type === "")
            color = "#ffffff";
        if (type === "gradient") {
            const breakdownArr = color.split(",");
            var [angle, color1, percent1, color2, percent2] = [Number(breakdownArr[0]), breakdownArr[1], Number(breakdownArr[2]), breakdownArr[3], Number(breakdownArr[4])];
            const radians = (angle - 180) * Math.PI / 180;
            const x0 = width / 2 + (width / 2) * Math.cos(radians - Math.PI / 2);
            const y0 = width * ratio / 2 + (width * ratio / 2) * Math.sin(radians - Math.PI / 2);
            const x1 = width / 2 - (width / 2) * Math.cos(radians - Math.PI / 2);
            const y1 = width * ratio / 2 - (width * ratio / 2) * Math.sin(radians - Math.PI / 2);
            const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
            gradient.addColorStop(percent1 / 100, color1);
            gradient.addColorStop(percent2 / 100, color2);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, width * ratio);
            const srcEncoded = ctx.canvas.toDataURL().split(",")[1];
            return [ctx, srcEncoded];
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            const srcEncoded = ctx.canvas.toDataURL().split(",")[1];
            return [ctx, srcEncoded];
        }
    }
}
exports["default"] = UploadFile;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************************************************!*\
  !*** ./controllers/client/src/dist/signup/signup.js ***!
  \******************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = signupPage;
const W_1 = __webpack_require__(/*! ../client/src/Web-Development/W */ "./controllers/client/src/dist/client/src/Web-Development/W.js");
const WW_1 = __webpack_require__(/*! ../client/src/Web-Development/WW */ "./controllers/client/src/dist/client/src/Web-Development/WW.js");
function signupPage(api) {
    (0, W_1.$$)("#password").passShowHide().run();
    (0, W_1.$$)(".passRequirements", "dropdown").toggle().run();
    (0, WW_1.$$$)({
        username: "#username",
        password: "#password",
        email: "#email",
        error: ".signupChild__error",
        checkbox: "#terms",
        register: ".signupChild__confirm"
    }, api, {
        before: ".signupChild",
        after: ".signupSuccess",
        beforeClass: "inactive",
        afterClass: "active",
    }).signup();
}

})();

/******/ })()
;
//# sourceMappingURL=signupjs36d6cf312dc71425867c.js.map