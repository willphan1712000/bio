"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const TransformController_1 = __importDefault(require("./TransformController"));
class Transform {
    constructor(ele1, ele2, ele3) {
        this.ele1 = ele1;
        this.ele2 = ele2;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.w = 0;
        this.h = 0;
        if (this.ele1 === null) {
            throw new Error("wrapper elemenet is not defined or not rendered yet");
        }
        this.wrapperClass = "_" + (Date.now() + 5000).toString();
        $(this.ele1).addClass(this.wrapperClass);
        this.imgFrame = this.ele2;
        if (this.imgFrame === null) {
            throw new Error("frame element is not defined or not rendered yet");
        }
        this.frameClass = "_" + (Date.now() - 5000).toString();
        $(this.ele2).addClass(this.frameClass);
        this.img = (this.ele1).querySelector("img");
        if (this.img === null) {
            throw new Error("image element is not defined or not rendered yet");
        }
        this.ratio = this.img.clientWidth / this.img.clientHeight;
        this.controllerClassName = "_" + Date.now().toString();
        this.isRotateOffScreen = false;
        this.initialize();
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const transformController = new TransformController_1.default(this.wrapperClass, this.frameClass, this.controllerClassName);
            yield transformController.addController();
            this.controllerContainer = document.querySelector("." + this.controllerClassName + '--container');
            this.controller = document.querySelector("." + this.controllerClassName);
            this.transform();
            this.handleElementGoOffScreen("." + this.controllerClassName + " .rotate", "." + this.controllerClassName + " .rotate.shadow", "rotate").handleElementGoOffScreen("." + this.controllerClassName + " .delete", "." + this.controllerClassName + " .delete.shadow", "delete");
        });
    }
    reset() {
        const width = this.imgFrame.clientWidth;
        const height = width / this.ratio;
        this.resize(width, height);
        this.repositionElement(width / 2, this.imgFrame.clientHeight / 2);
        this.rotateBox(0);
        this.setValue(0, this.imgFrame.clientHeight / 2 - this.img.height / 2, 0, width, height);
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
    repositionElement(x, y) {
        const controllerWrapper = this.controllerContainer;
        const boxWrapper = this.ele1;
        boxWrapper.style.left = x + 'px';
        boxWrapper.style.top = y + 'px';
        controllerWrapper.style.left = (x + this.imgFrame.offsetLeft + 3) + 'px';
        controllerWrapper.style.top = (y + this.imgFrame.offsetTop + 3) + 'px';
    }
    resize(w, h) {
        const controller = this.controller;
        const img = this.img;
        const wrapper = this.ele1;
        controller.style.width = w + 3 + 'px';
        controller.style.height = h + 3 + 'px';
        img.style.width = w + 'px';
        wrapper.style.width = w + 'px';
    }
    rotateBox(deg) {
        const controllerWrapper = this.controllerContainer;
        const boxWrapper = this.ele1;
        boxWrapper.style.transform = `rotate(${deg}deg)`;
        controllerWrapper.style.rotate = `${deg}deg`;
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
        const controllerWrapper = this.controllerContainer;
        const boxWrapper = this.ele1;
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
                controllerWrapper.addEventListener('touchmove', eventMoveHandler, { 'passive': true });
                window.addEventListener('touchend', function eventEndHandler() {
                    controllerWrapper.removeEventListener('touchmove', eventMoveHandler);
                    window.removeEventListener('touchend', eventEndHandler);
                }, false);
            }
        };
        controllerWrapper.addEventListener('mousedown', e => handleDrag(e, 'desk'), false);
        controllerWrapper.addEventListener('touchstart', e => handleDrag(e, 'touch'), { 'passive': true });
        var leftTop = document.querySelector("." + this.controllerClassName + " .resize-topleft");
        var rightTop = document.querySelector("." + this.controllerClassName + " .resize-topright");
        var rightBottom = document.querySelector("." + this.controllerClassName + " .resize-bottomright");
        var leftBottom = document.querySelector("." + this.controllerClassName + " .resize-bottomleft");
        const resizeHandler = (event, left = false, top = false, xResize = false, yResize = false, type) => {
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
                window.addEventListener('touchmove', eventMoveHandler, { 'passive': true });
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
        leftTop.addEventListener('touchstart', e => resizeHandler(e, true, true, true, true, 'touch'), { 'passive': true });
        rightTop.addEventListener('touchstart', e => resizeHandler(e, false, true, true, true, 'touch'), { 'passive': true });
        rightBottom.addEventListener('touchstart', e => resizeHandler(e, false, false, true, true, 'touch'), { 'passive': true });
        leftBottom.addEventListener('touchstart', e => resizeHandler(e, true, false, true, true, 'touch'), { 'passive': true });
        var rotate = document.querySelector("." + this.controllerClassName + " .rotate");
        const handleRotate = (event, type) => {
            event.stopPropagation();
            initX = event.target.offsetLeft;
            initY = event.target.offsetTop;
            mousePressX = (type === 'desk') ? event.clientX : event.touches[0].clientX;
            mousePressY = (type === 'desk') ? event.clientY : event.touches[0].clientY;
            var arrow = this.controller;
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
                window.addEventListener('touchmove', eventMoveHandler, { 'passive': true });
                window.addEventListener('touchend', function eventEndHandler() {
                    window.removeEventListener('touchmove', eventMoveHandler, false);
                    window.removeEventListener('touchend', eventEndHandler);
                }, false);
            }
        };
        rotate.addEventListener('mousedown', e => handleRotate(e, 'desk'), false);
        rotate.addEventListener('touchstart', e => handleRotate(e, 'touch'), { 'passive': true });
        this.reset();
        return this;
    }
    cleanup() {
        window.removeEventListener('mousedown', () => { });
        window.removeEventListener('mouseup', () => { });
        window.removeEventListener('mousemove', () => { });
        window.removeEventListener('touchstart', () => { });
        window.removeEventListener('touchend', () => { });
        window.removeEventListener('touchmove', () => { });
        return this;
    }
}
exports.default = Transform;
