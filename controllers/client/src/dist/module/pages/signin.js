"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = signinPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const image_1 = __importDefault(require("./signinComponents/image"));
const Text_1 = __importDefault(require("./signinComponents/Text"));
function signinPage() {
    const root = client_1.default.createRoot(document.getElementById('root'));
    root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(Text_1.default, { name: "Hello World" }) }));
    const root1 = client_1.default.createRoot(document.getElementById('root1'));
    root1.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(image_1.default, {}) }));
}
