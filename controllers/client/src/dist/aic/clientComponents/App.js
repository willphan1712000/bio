"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("@tanstack/react-router");
const react_1 = require("react");
const theme_1 = require("../../client/clientComponents/context/theme");
const detectLightMode_1 = __importDefault(require("../../client/utilities/detectLightMode"));
const routeTree_gen_1 = require("./routes/routeTree.gen");
const router = (0, react_router_1.createRouter)({
    routeTree: routeTree_gen_1.routeTree,
    basepath: '/@aic'
});
const App = () => {
    const [theme, setTheme] = (0, react_1.useState)({
        classes: {
            bg: '',
            border: '',
            hover: '',
            text: '',
        },
    });
    const classes = `${theme === null || theme === void 0 ? void 0 : theme.classes.bg} h-full`;
    (0, react_1.useEffect)(() => {
        const currentTheme = (0, detectLightMode_1.default)();
        setTheme({
            classes: {
                bg: `system-${currentTheme}-bg`,
                border: `system-${currentTheme}-border`,
                hover: `system-${currentTheme}-hover`,
                text: `system-${currentTheme}-text`
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(theme_1.ThemeContext.Provider, { value: theme, children: (0, jsx_runtime_1.jsx)("div", { className: classes, children: (0, jsx_runtime_1.jsx)(react_router_1.RouterProvider, { router: router }) }) }));
};
exports.default = App;
