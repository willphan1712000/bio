"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.username = username;
function username() {
    const path = window.location.pathname;
    return path.split("/");
}
