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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminContext_1 = __importStar(require("../AdminContext"));
const codeList_1 = __importDefault(require("./codeList"));
const CountryCodeDropDown = ({ isListShown, listRef, setDropDown }) => {
    const data = (0, AdminContext_1.default)();
    const name = (0, AdminContext_1.handleAdminElementContext)();
    const [list, setList] = (0, react_1.useState)(codeList_1.default);
    const [value, setValue] = (0, react_1.useState)('');
    const top = {
        top: 'calc(100% + 5px)'
    };
    defaultValue();
    function defaultValue() {
        switch (name) {
            case 'Mobile':
                if (data['MobileCode'] === null || data['MobileCode'] === '' || data['MobileFlag'] === null || data['MobileFlag'] === '') {
                    setCountryCode({ code: '+1', flag: 'us' });
                }
                break;
            case 'Work':
                if (data['WorkCode'] === null || data['WorkCode'] === '' || data['WorkFlag'] === null || data['WorkFlag'] === '') {
                    setCountryCode({ code: '+1', flag: 'us' });
                }
                break;
            case 'Viber':
                if (data['ViberCode'] === null || data['ViberCode'] === '' || data['ViberFlag'] === null || data['ViberFlag'] === '') {
                    setCountryCode({ code: '+1', flag: 'us' });
                }
                break;
            case 'HotLine':
                if (data['HotLineCode'] === null || data['HotLineCode'] === '' || data['HotLineFlag'] === null || data['HotLineFlag'] === '') {
                    setCountryCode({ code: '+1', flag: 'us' });
                }
                break;
            case 'Whatsapp':
                if (data['WhatsappCode'] === null || data['WhatsappCode'] === '' || data['WhatsappFlag'] === null || data['WhatsappFlag'] === '') {
                    setCountryCode({ code: '+1', flag: 'us' });
                }
                break;
            default:
                break;
        }
    }
    function setCountryCode({ flag, code }) {
        switch (name) {
            case 'Mobile':
                data['MobileCode'] = code;
                data['MobileFlag'] = flag;
                break;
            case 'Work':
                data['WorkCode'] = code;
                data['WorkFlag'] = flag;
                break;
            case 'HotLine':
                data['HotLineCode'] = code;
                data['HotLineFlag'] = flag;
                break;
            case 'Viber':
                data['ViberCode'] = code;
                data['ViberFlag'] = flag;
                break;
            case 'Whatsapp':
                data['WhatsappCode'] = code;
                data['WhatsappFlag'] = flag;
                break;
            default:
                break;
        }
    }
    const countryCodeClickHandler = ({ dial_code, code }) => {
        setCountryCode({ flag: code, code: dial_code });
        setDropDown();
    };
    const worker = new Worker('/controllers/client/src/dist/admin/clientComponents/CountryCode/worker.js');
    const onSearch = (e) => {
        let value = e.target.value;
        setValue(value);
        worker.postMessage({
            value,
            codeList: codeList_1.default
        });
    };
    worker.onmessage = function (e) {
        setList(e.data);
    };
    return (isListShown && ((0, jsx_runtime_1.jsxs)("div", { style: top, className: "flex codeList !absolute flex-col left-0 h-[500%] bg-white rounded-[10px] z-[999] p-[5px]", ref: listRef, children: [(0, jsx_runtime_1.jsx)("div", { className: "codeList__search", children: (0, jsx_runtime_1.jsx)("input", { onChange: onSearch, name: "search", id: "searchCountry", type: "text", placeholder: "Search Country", defaultValue: value }) }), (0, jsx_runtime_1.jsx)("div", { className: "codeList__list overflow-auto m-[5px]", children: list.map(country => (0, jsx_runtime_1.jsxs)("div", { onClick: () => countryCodeClickHandler(country), className: "each flex flex-row justify-between p-[5px] cursor-pointer rounded-[10px] hover:bg-[#d9d9d9]", "data-flag": country.code, children: [(0, jsx_runtime_1.jsx)("p", { children: country.name }), (0, jsx_runtime_1.jsx)("p", { children: country.dial_code })] }, country.code)) })] })));
};
exports.default = CountryCodeDropDown;
