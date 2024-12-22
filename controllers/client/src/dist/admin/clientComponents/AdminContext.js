"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminElementContext = exports.AdminRegexContext = exports.AdminContext = void 0;
exports.default = handleAdminContext;
exports.handleAdminRegexContext = handleAdminRegexContext;
exports.handleAdminElementContext = handleAdminElementContext;
const react_1 = require("react");
exports.AdminContext = (0, react_1.createContext)(undefined);
exports.AdminRegexContext = (0, react_1.createContext)(undefined);
exports.AdminElementContext = (0, react_1.createContext)(undefined);
function handleAdminContext() {
    if (exports.AdminContext === undefined) {
        throw new Error("Admin context is undefined");
    }
    return exports.AdminContext;
}
function handleAdminRegexContext() {
    if (exports.AdminRegexContext === undefined) {
        throw new Error("Admin context is undefined");
    }
    return exports.AdminRegexContext;
}
function handleAdminElementContext() {
    if (exports.AdminContext === undefined) {
        throw new Error("Admin element context is undefined");
    }
    return exports.AdminElementContext;
}
