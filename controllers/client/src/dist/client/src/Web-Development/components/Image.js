"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Image = ({ src, objectFit }) => {
    return ((0, jsx_runtime_1.jsx)("img", { className: `image size-full ${!objectFit ? 'object-contain' : 'object-' + objectFit}`, src: src, draggable: false, alt: 'React Image Component' }));
};
exports.default = Image;
