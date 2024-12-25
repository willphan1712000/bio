"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminImageContext = exports.AdminElementContext = exports.AdminRegexContext = exports.AdminContext = void 0;
exports.default = handleAdminContext;
exports.handleAdminRegexContext = handleAdminRegexContext;
exports.handleAdminElementContext = handleAdminElementContext;
exports.handleAdminImageContext = handleAdminImageContext;
exports.username = username;
const react_1 = require("react");
exports.AdminContext = (0, react_1.createContext)(undefined);
exports.AdminRegexContext = (0, react_1.createContext)(undefined);
exports.AdminElementContext = (0, react_1.createContext)(undefined);
exports.AdminImageContext = (0, react_1.createContext)(undefined);
function handleAdminContext() {
    const data = (0, react_1.useContext)(exports.AdminContext);
    if (data === undefined) {
        throw new Error("Admin context is undefined");
    }
    return data;
}
function handleAdminRegexContext() {
    const data = (0, react_1.useContext)(exports.AdminRegexContext);
    if (data === undefined) {
        throw new Error("Admin regex context is undefined");
    }
    return data;
}
function handleAdminElementContext() {
    const data = (0, react_1.useContext)(exports.AdminElementContext);
    if (data === undefined) {
        throw new Error("Admin element context is undefined");
    }
    return data;
}
function handleAdminImageContext() {
    const data = (0, react_1.useContext)(exports.AdminImageContext);
    if (data === undefined) {
        throw new Error("Admin image context is undefined");
    }
    return data;
}
function username() {
    const path = window.location.pathname;
    return path.split("/")[1];
}
