"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const collapse_1 = require("./context/collapse");
const theme_1 = __importDefault(require("../../../client/clientComponents/context/theme"));
const config_1 = __importDefault(require("../config"));
const Account_1 = __importDefault(require("./Account"));
const Tab_1 = __importDefault(require("./Tab"));
const SideBar = () => {
    const [isCollapse, setCollapse] = (0, react_1.useState)(false);
    const theme = (0, theme_1.default)();
    const className = `${theme.classes.border} ${isCollapse ? 'w-fit' : 'w-[270px]'} md:flex hidden sticky top-0 left-0 h-[100vh] shadow-2xl rounded-xl flex-col justify-between`;
    const tabs = config_1.default.sideBarTabs;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(collapse_1.CollapseContext.Provider, { value: { isCollapse, setCollapse }, children: [(0, jsx_runtime_1.jsx)("div", { className: 'flex md:hidden flex-row justify-center fixed top-0 w-full bg-white shadow-2xl z-[2]', children: Object.keys(tabs).map(tab => ((0, jsx_runtime_1.jsx)(Tab_1.default, { to: tabs[tab].to, name: tabs[tab].name, icon: tabs[tab].icon }, tab))) }), (0, jsx_runtime_1.jsxs)("div", { className: className, children: [(0, jsx_runtime_1.jsx)(Account_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: 'flex-1', children: Object.keys(tabs).map(tab => ((0, jsx_runtime_1.jsx)(Tab_1.default, { to: tabs[tab].to, name: tabs[tab].name, icon: tabs[tab].icon }, tab))) }), (0, jsx_runtime_1.jsx)("div", { title: 'Collapse Menu', children: (0, jsx_runtime_1.jsx)(Tab_1.default, { name: config_1.default.collapse.name, icon: config_1.default.collapse.icon, onClick: () => setCollapse(prev => !prev) }) })] })] }) }));
};
exports.default = SideBar;
