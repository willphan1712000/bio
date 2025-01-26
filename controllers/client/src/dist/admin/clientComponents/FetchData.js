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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
exports.getResource = getResource;
exports.getCSS = getCSS;
exports.pushData = pushData;
exports.pushCSS = pushCSS;
const WW_1 = require("../../client/src/Web-Development/WW");
function fetchData(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, WW_1.$$$)("/data/api/info/GET.php", {
            username
        }).api().post();
        if (!data.success) {
            throw new Error(data.error);
        }
        const dataList = data.data;
        if (!dataList) {
            throw new Error('Data is undefined');
        }
        return dataList;
    });
}
function getResource(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const resource = yield (0, WW_1.$$$)("/data/api/user/GETResource.php", {
            username
        }).api().post();
        if (!resource.success) {
            throw new Error(resource.error);
        }
        const resourceList = resource.data;
        if (!resourceList) {
            throw new Error('Resource is undefined');
        }
        return resourceList;
    });
}
function getCSS(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const css = yield (0, WW_1.$$$)("/data/api/style/GET.php", {
            username
        }).api().post();
        if (!css.success) {
            throw new Error(css.error);
        }
        const cssList = css.data;
        if (!cssList) {
            throw new Error("Css is undefined");
        }
        return cssList;
    });
}
function pushData(data) {
    return (0, WW_1.$$$)("/data/api/info/PUT.php", data).api().post();
}
function pushCSS(data) {
    const formatedData = {
        username: data.username,
        props: {
            font: data.font,
            fontSize: data.fontSize,
            fontColor: data.fontColor,
            background: data.background
        }
    };
    return (0, WW_1.$$$)("/data/api/style/PUT.php", formatedData).api().post();
}
