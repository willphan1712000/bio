"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CountryCodeDropDown_1 = __importDefault(require("./CountryCodeDropDown"));
const CountryCodeIcon_1 = __importDefault(require("./CountryCodeIcon"));
const CountryCode = () => {
    const [isListShown, setShown] = (0, react_1.useState)(false);
    const listRef = (0, react_1.useRef)(null);
    const buttonRef = (0, react_1.useRef)(null);
    function setDropDown() {
        setShown(!isListShown);
    }
    (0, react_1.useEffect)(() => {
        const handler = (e) => {
            var _a, _b;
            if (!((_a = listRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && !((_b = buttonRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
                setShown(false);
            }
        };
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(CountryCodeIcon_1.default, { onCallBack: setDropDown, buttonRef: buttonRef }), (0, jsx_runtime_1.jsx)(CountryCodeDropDown_1.default, { setDropDown: setDropDown, isListShown: isListShown, listRef: listRef })] }));
};
exports.default = CountryCode;
