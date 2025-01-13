"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Font = exports.Color = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
var ColorType_1 = require("./types/ColorType");
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return __importDefault(ColorType_1).default; } });
var FontType_1 = require("./types/FontType");
Object.defineProperty(exports, "Font", { enumerable: true, get: function () { return __importDefault(FontType_1).default; } });
const Options = ({ keyValue, Face, face, list, cb }) => {
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = document.querySelector(`#${keyValue}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
            const ele = e.target;
            if (ele.matches(`[data-key=${keyValue}]`)) {
                cb($(ele).data('value'));
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { id: keyValue, className: "flex flex-row flex-1 items-center bg-white p-[10px] rounded-[20px] z-[1] overflow-y-hidden overflow-x-auto w-full", style: { scrollbarWidth: 'none' }, children: list.map(item => (0, jsx_runtime_1.jsx)("div", { "data-value": item, "data-key": keyValue, className: "overflow-hidden cursor-pointer flex flex-shrink-0 aspect-square w-[50px] h-[50px] mr-[5px] rounded-[50%] text-[25px] bg-[#f0f0f0]", children: (0, jsx_runtime_1.jsx)(Face, { face: face, value: item }) }, item)) }));
};
exports.default = Options;
