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
const W_1 = require("../client/src/Web-Development/W");
const WW_1 = require("../client/src/Web-Development/WW");
const InfoArea_1 = __importDefault(require("./clientComponents/InfoArea"));
$(document).ready(function () {
    adminPage();
});
function adminPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, WW_1.$$$)("/data/api/info/GET.php", {
            username
        }).api().post();
        if (!data.success) {
            return;
        }
        const list = data.data;
        list.username = username;
        (0, W_1.$$)("#info__wrapper", (0, jsx_runtime_1.jsx)(InfoArea_1.default, { data: list, extraData: { defaultImgPath } })).reactMounting();
        $(".info__img--remove").click(function () {
            let data = {
                type: 'avaDelete',
                username: username,
                img: $(".info__img .uploadImg__filename").val()
            };
            $.ajax({
                url: "/data/api/info/PUTss.php",
                method: "POST",
                data: JSON.stringify(data),
                dataType: "html",
                contentType: "application.json",
                success: function (e) {
                    if (e) {
                    }
                    else {
                        location.reload();
                    }
                }
            });
        });
    });
}