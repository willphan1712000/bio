"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_decode_1 = require("jwt-decode");
const key = "CRM-ctoken";
function setToken(token) {
    localStorage.setItem(key, token);
}
function getToken() {
    return localStorage.getItem(key);
}
function getUser() {
    const token = getToken();
    return token ? (0, jwt_decode_1.jwtDecode)(token) : null;
}
function removeToken() {
    localStorage.removeItem(key);
}
exports.default = {
    key,
    setToken,
    getToken,
    removeToken,
    getUser
};
