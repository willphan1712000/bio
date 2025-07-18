"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadFile {
    constructor(ele1, cb, type) {
        Object.defineProperty(this, "$ele1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "$ele2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$ele1 = $(ele1);
        this.$ele1.after(`<input type="file" hidden accept="${type}">`);
        this.$ele2 = this.$ele1.siblings('input');
        this.openFile();
        this.$ele2.on("input", e => {
            var _a;
            const target = e.target;
            const file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                const fileType = file.type;
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (readerEvent) => {
                    var _a;
                    const imgElement = document.createElement("img");
                    imgElement.src = (_a = readerEvent.target) === null || _a === void 0 ? void 0 : _a.result;
                    imgElement.onload = (imgEvent) => {
                        cb({
                            e: imgEvent.target.src,
                            error: this.isValidType(fileType, type)
                        });
                    };
                };
            }
            target.value = '';
        });
    }
    isValidType(fileType, validType) {
        return fileType.split("/")[0] === validType.split("/")[0];
    }
    openFile() {
        this.$ele1.click(e => {
            e.stopPropagation();
            this.$ele2.click();
        });
    }
}
exports.default = UploadFile;
