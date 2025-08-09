export default class TextEditor {
    constructor(element, cb) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
