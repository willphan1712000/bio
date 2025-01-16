"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSettingContext = exports.AdminLabelContext = exports.AdminDeleteContext = exports.AdminSaveContext = exports.AdminImageContext = exports.AdminElementContext = exports.AdminRegexContext = exports.AdminCssContext = exports.AdminContext = void 0;
exports.default = handleAdminContext;
exports.handleAdminRegexContext = handleAdminRegexContext;
exports.handleAdminElementContext = handleAdminElementContext;
exports.handleAdminImageContext = handleAdminImageContext;
exports.handleAdminSaveContext = handleAdminSaveContext;
exports.handleAdminDeleteContext = handleAdminDeleteContext;
exports.handleAdminLabelContext = handleAdminLabelContext;
exports.handleAdminSettingContext = handleAdminSettingContext;
exports.handleAdminCssContext = handleAdminCssContext;
exports.username = username;
const react_1 = require("react");
exports.AdminContext = (0, react_1.createContext)(undefined);
exports.AdminCssContext = (0, react_1.createContext)(undefined);
exports.AdminRegexContext = (0, react_1.createContext)(undefined);
exports.AdminElementContext = (0, react_1.createContext)(undefined);
exports.AdminImageContext = (0, react_1.createContext)(undefined);
exports.AdminSaveContext = (0, react_1.createContext)(undefined);
exports.AdminDeleteContext = (0, react_1.createContext)(undefined);
exports.AdminLabelContext = (0, react_1.createContext)(undefined);
exports.AdminSettingContext = (0, react_1.createContext)(undefined);
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
function handleAdminSaveContext() {
    const data = (0, react_1.useContext)(exports.AdminSaveContext);
    if (data === undefined) {
        throw new Error("Admin save context is undefined");
    }
    return data;
}
function handleAdminDeleteContext() {
    const data = (0, react_1.useContext)(exports.AdminDeleteContext);
    if (data === undefined) {
        throw new Error("Admin delete context is undefined");
    }
    return data;
}
function handleAdminLabelContext() {
    const data = (0, react_1.useContext)(exports.AdminLabelContext);
    if (data === undefined) {
        throw new Error("Admin label context is undefined");
    }
    return data;
}
function handleAdminSettingContext() {
    const data = (0, react_1.useContext)(exports.AdminSettingContext);
    if (data === undefined) {
        throw new Error("Admin setting context is undefined");
    }
    return data;
}
function handleAdminCssContext() {
    const data = (0, react_1.useContext)(exports.AdminCssContext);
    if (data === undefined) {
        throw new Error("Admin CSS context is undefined");
    }
    return data;
}
function username() {
    const path = window.location.pathname;
    return path.split("/")[1];
}
