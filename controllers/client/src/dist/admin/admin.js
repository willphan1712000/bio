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
const swiper_1 = __importDefault(require("swiper"));
const html2canvas_1 = __importDefault(require("html2canvas"));
const jspdf_1 = __importDefault(require("jspdf"));
const SettingUI_1 = require("./clientComponents/SettingUI");
function admin(props) {
    const swiper = new swiper_1.default('.swiper', {
        direction: 'horizontal',
        loop: false
    });
    $("#setting .image").click(() => __awaiter(this, void 0, void 0, function* () {
        const front = document.querySelector("#template-container");
        const front_d = front.getBoundingClientRect();
        (0, html2canvas_1.default)(front, {
            width: front_d.width,
            height: front_d.height,
            x: 0,
            y: 0,
            useCORS: true,
        }).then(canvas => {
            const r = canvas.width / canvas.height;
            const width = 200;
            const height = width / r;
            const doc = new jspdf_1.default({
                orientation: 'portrait',
                unit: 'px',
                format: [width, height]
            });
            const img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");
            doc.addImage(img, "png", 0, 0, width, height);
            doc.save("front.pdf");
        });
        const back = document.querySelector(".card-back-container");
        const back_d = back.getBoundingClientRect();
        (0, html2canvas_1.default)(back, {
            width: back_d.width,
            height: back_d.height,
            x: 0,
            y: 0,
            useCORS: true,
        }).then(canvas => {
            const r = canvas.width / canvas.height;
            const width = 200;
            const height = width / r;
            const doc = new jspdf_1.default({
                orientation: 'portrait',
                unit: 'px',
                format: [width, height]
            });
            const img = document.createElement("img");
            img.src = canvas.toDataURL("image/png");
            doc.addImage(img, "png", 0, 0, width, height);
            doc.save("img/back.pdf");
        });
    }));
    const settingUI = new SettingUI_1.SettingUI({
        css: props['css'],
        imgPath: props['imgPath'],
        username: props['username'],
        imgName: props['imgName'],
    });
}
