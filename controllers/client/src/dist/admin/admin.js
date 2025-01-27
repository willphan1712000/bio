"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = admin;
const jsx_runtime_1 = require("react/jsx-runtime");
const swiper_1 = __importDefault(require("swiper"));
const W_1 = require("../client/src/Web-Development/W");
const AdminContext_1 = require("./clientComponents/AdminContext");
const FetchData_1 = require("./clientComponents/FetchData");
const Setting_1 = __importDefault(require("./clientComponents/Setting/Setting"));
$(document).ready(function () {
    admin();
});
function admin() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = (0, AdminContext_1.username)();
        const list = yield (0, FetchData_1.fetchData)(user);
        list.username = user;
        const resource = yield (0, FetchData_1.getResource)(user);
        const css = yield (0, FetchData_1.getCSS)(user);
        (0, W_1.$$)("#setting", (0, jsx_runtime_1.jsx)(Setting_1.default, { data: list, css: css, resource: resource })).reactMounting();
        const swiper = new swiper_1.default('.swiper', {
            direction: 'horizontal',
            loop: false
        });
    });
}
