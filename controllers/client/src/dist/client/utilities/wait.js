"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wait = (howLong) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(null);
        }, howLong);
    });
};
exports.default = wait;
