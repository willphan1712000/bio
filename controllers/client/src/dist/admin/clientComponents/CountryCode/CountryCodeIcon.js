"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminContext_1 = __importStar(require("../AdminContext"));
const CountryCodeIcon = ({ buttonRef, onCallBack }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const name = (0, AdminContext_1.handleAdminElementContext)();
    const data = (0, AdminContext_1.default)();
    let flag = '', code = '';
    switch (name) {
        case 'Mobile':
            flag = (_a = data['MobileFlag']) !== null && _a !== void 0 ? _a : 'us';
            code = (_b = data['MobileCode']) !== null && _b !== void 0 ? _b : '+1';
            break;
        case 'Work':
            flag = (_c = data['WorkFlag']) !== null && _c !== void 0 ? _c : 'us';
            code = (_d = data['WorkCode']) !== null && _d !== void 0 ? _d : '+1';
            break;
        case 'Viber':
            flag = (_e = data['ViberFlag']) !== null && _e !== void 0 ? _e : 'us';
            code = (_f = data['ViberCode']) !== null && _f !== void 0 ? _f : '+1';
            break;
        case 'HotLine':
            flag = (_g = data['HotLineFlag']) !== null && _g !== void 0 ? _g : 'us';
            code = (_h = data['HotLineCode']) !== null && _h !== void 0 ? _h : '+1';
            break;
        default:
            break;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: () => onCallBack(), className: "countryCode p-[2px] flex flex-row rounded-[10px] bg-white h-auto mr-[5px] cursor-pointer", "data-index": true, "data-flag": true, "data-code": true, ref: buttonRef, children: [(0, jsx_runtime_1.jsx)("div", { className: "flag w-[40px] p-[5px] !flex items-center", children: (0, jsx_runtime_1.jsx)("img", { draggable: false, className: 'w-full h-full', src: `/controllers/admin/clientComponents/CountryCode/flags/${flag.toLowerCase()}.png` }) }), (0, jsx_runtime_1.jsx)("p", { className: "code !flex items-center p-[2px]", children: code }), (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-caret-down !flex items-center p-[2px]" })] }));
};
exports.default = CountryCodeIcon;
