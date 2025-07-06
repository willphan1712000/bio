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
const Template_1 = __importDefault(require("./Template/Template"));
const ECards_1 = __importDefault(require("./eCards/ECards"));
const Marketing_1 = __importDefault(require("./Template/Marketing"));
const Separator_1 = __importDefault(require("./Separator"));
const UpSell_1 = __importDefault(require("./eCards/UpSell"));
const App = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C] flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)(Banner_1.default, {}), (0, jsx_runtime_1.jsx)(Template_1.default, {}), (0, jsx_runtime_1.jsx)(Marketing_1.default, {}), (0, jsx_runtime_1.jsx)(ECards_1.default, {}), (0, jsx_runtime_1.jsx)(Separator_1.default, {}), (0, jsx_runtime_1.jsx)(AppScrollTrigger_1.default, {}), (0, jsx_runtime_1.jsx)(Separator_1.default, {}), (0, jsx_runtime_1.jsx)(UpSell_1.default, {}), (0, jsx_runtime_1.jsx)(Separator_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = App;
