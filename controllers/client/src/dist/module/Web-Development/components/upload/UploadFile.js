"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = UploadFile;
