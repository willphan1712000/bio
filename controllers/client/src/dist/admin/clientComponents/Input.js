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
const react_1 = require("react");
const WW_1 = require("../../client/src/Web-Development/WW");
const AdminContext_1 = __importStar(require("./AdminContext"));
const Input = ({ inputLabelColor, name }) => {
    const data = (0, AdminContext_1.default)();
    const regexMap = (0, AdminContext_1.handleAdminRegexContext)();
    const nameContext = (0, AdminContext_1.handleAdminElementContext)();
    const labelMap = (0, AdminContext_1.handleAdminLabelContext)();
    if (name === undefined) {
        name = nameContext;
    }
    const [value, setValue] = (0, react_1.useState)('');
    const inputRef = (0, react_1.useRef)(null);
    const spanRef = (0, react_1.useRef)(null);
    const handleChange = (e) => {
        const valueFormatted = e.target.value;
        setValue(valueFormatted);
        data[name] = valueFormatted;
    };
    (0, react_1.useEffect)(() => {
        setValue(data[name]);
        $(spanRef.current).empty();
        const validate = (0, WW_1.$$$)(inputRef.current, spanRef.current, new RegExp(regexMap[name].slice(1, -1))).formValidate();
        return () => {
            validate.cleanup();
        };
    }, [name]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'relative w-full h-[32px]', children: [(0, jsx_runtime_1.jsx)("input", { ref: inputRef, value: value === null ? '' : value, onChange: handleChange, required: true, type: "text", inputMode: ['Mobile', 'Work', 'Zalo', 'Viber', 'HotLine', 'Whatsapp'].includes(name) ? 'numeric' : 'text', autoComplete: 'on', name: name, id: name, className: 'peer absolute rounded-[10px] border-black border-[1px] p-[5px] text-[16px] w-full h-auto z-[1] bg-transparent' }), (0, jsx_runtime_1.jsxs)("div", { style: { background: inputLabelColor }, className: `label z-[0] absolute top-0 left-0 py-0 px-[5px] m-[5px] text-[15px] text-black transition-all peer-focus:top-[-15px] peer-focus:left-[10px] peer-focus:z-[1] peer-focus:text-[13px] peer-valid:top-[-15px] peer-valid:left-[10px] peer-valid:z-[1] peer-valid:text-[13px]`, children: [labelMap[name], " ", (0, jsx_runtime_1.jsx)("span", { ref: spanRef, className: 'ml-[5px]' })] })] }));
};
exports.default = Input;
