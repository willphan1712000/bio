"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer_1 = __importDefault(require("./Footer/Footer"));
const Banner_1 = __importDefault(require("./Heading/Banner"));
const NavBar_1 = __importDefault(require("./NavBar/NavBar"));
const AppScrollTrigger_1 = __importDefault(require("./ScrollTrigger/AppScrollTrigger"));
const Desktop_1 = __importDefault(require("./Template/Desktop/Desktop"));
const Mobile_1 = __importDefault(require("./Template/Mobile/Mobile"));
const App = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C]", children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)(Banner_1.default, {}), (0, jsx_runtime_1.jsx)(Mobile_1.default, {}), (0, jsx_runtime_1.jsx)(Desktop_1.default, {}), (0, jsx_runtime_1.jsx)(AppScrollTrigger_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = App;
