"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const html2canvas_1 = __importDefault(require("html2canvas"));
const jspdf_1 = __importDefault(require("jspdf"));
const handleClick = () => {
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
};
const SavePDF = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: handleClick, className: "flex justify-center items-center flex-shrink-0 cursor-pointer h-fit typebox", children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-image mr-[5px]" }), "Save PDF"] }));
};
exports.default = SavePDF;
