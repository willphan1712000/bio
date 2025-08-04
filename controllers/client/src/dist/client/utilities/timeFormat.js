"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dateFormat;
function dateFormat(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
}
