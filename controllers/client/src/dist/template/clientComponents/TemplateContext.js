"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.username = username;
exports.getQueryStr = getQueryStr;
exports.auth = auth;
function username() {
    const url = window.location.href;
    const searchParams = (new URL(url)).searchParams;
    return searchParams.get('username');
}
function getQueryStr(queryName) {
    const url = window.location.href;
    const searchParams = (new URL(url)).searchParams;
    return searchParams.get(queryName);
}
function auth(isSignedIn, cb) {
    if (!isSignedIn) {
        window.location.href = '/@signin?template=true';
    }
    else {
        cb();
    }
}
