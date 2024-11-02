"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = TextEditor;
