"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.username = username;
function username() {
    const url = window.location.href;
    const searchParams = (new URL(url)).searchParams;
    return searchParams.get('username');
}
