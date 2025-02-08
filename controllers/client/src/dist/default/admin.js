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
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminContext_1 = require("../admin/clientComponents/AdminContext");
const Delete_1 = __importDefault(require("../admin/clientComponents/Delete/Delete"));
const FetchData_1 = require("../admin/clientComponents/FetchData");
const W_1 = require("../client/src/Web-Development/W");
const InfoArea_1 = __importDefault(require("./clientComponents/InfoArea"));
$(document).ready(function () {
    adminPage();
});
function adminPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = (0, AdminContext_1.username)();
        const list = yield (0, FetchData_1.fetchData)(user);
        list.username = user;
        const resource = yield (0, FetchData_1.getResource)(user);
        (0, W_1.$$)("#info__wrapper", (0, jsx_runtime_1.jsx)(InfoArea_1.default, { data: list, extraData: { defaultImgPath: resource.defaultImg, regexMap: resource.regexMap, labelMap: resource.labelMap, iconMap: resource.iconMap } })).reactMounting();
        (0, W_1.$$)("#delete", (0, jsx_runtime_1.jsx)(Delete_1.default, { message: resource.deleteWarning })).reactMounting();
    });
}
