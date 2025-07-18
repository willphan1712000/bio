"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor(error) {
        Object.defineProperty(this, "$error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$error = $(error);
    }
    setError(msg) {
        this.$error.html(msg);
    }
}
exports.default = Error;
