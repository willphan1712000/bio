"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor(error) {
        this.$error = $(error);
    }
    setError(msg) {
        this.$error.html(msg);
    }
}
exports.default = Error;
