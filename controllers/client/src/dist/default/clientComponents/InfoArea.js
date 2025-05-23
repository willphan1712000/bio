"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminContext_1 = require("../../admin/clientComponents/AdminContext");
const Avatar_1 = __importDefault(require("../../admin/clientComponents/Avatar/Avatar"));
const Input_1 = __importDefault(require("../../admin/clientComponents/Input"));
const SaveDefault_1 = __importDefault(require("../../admin/clientComponents/Save/SaveDefault"));
const SocialTag_1 = __importDefault(require("../../admin/clientComponents/SocialTag"));
const AdminContextProvider_1 = __importDefault(require("../../admin/clientComponents/AdminContextProvider"));
const InfoArea = ({ data, extraData }) => {
    const [isLoading, setLoading] = (0, react_1.useState)(true);
    const [description, setDescription] = (0, react_1.useState)(data.description);
    function desChangeHandler(e) {
        setDescription(e.target.value);
        data.description = e.target.value;
    }
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
    const orders = ['Email', 'Address', 'Mobile', 'Work', 'Viber', 'Whatsapp', 'HotLine', 'Menu', 'Booking', 'Website', 'OrderOnline', 'HotSale'];
    const exclude1 = ['username', 'name', 'image', 'organization', 'position', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode', 'ViberFlag', 'ViberCode', 'HotLineFlag', 'HotLineCode', 'WhatsappCode', 'WhatsappFlag'];
    const exclude = [...exclude1, ...orders];
    if (isLoading)
        return (0, jsx_runtime_1.jsx)("div", { className: 'm-3', children: (0, jsx_runtime_1.jsx)("p", { className: 'text-center', children: "Loading... Please Wait" }) });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(AdminContextProvider_1.default, { data: data, css: null, regex: extraData.regexMap, label: extraData.labelMap, iconMap: extraData.iconMap, setting: null, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'info', children: [(0, jsx_runtime_1.jsx)("div", { className: "info__img info__img--ava", id: "avatar", children: (0, jsx_runtime_1.jsx)(Avatar_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: "info__about", children: [(0, jsx_runtime_1.jsx)("div", { className: "info__name my-[15px]", children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminElementContext.Provider, { value: 'name', children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabelColor: '#fff', name: 'name' }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "info__position my-[15px]", children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminElementContext.Provider, { value: 'position', children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabelColor: '#fff', name: 'position' }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "info__org my-[15px]", children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminElementContext.Provider, { value: 'organization', children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabelColor: '#fff', name: 'organization' }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "info__des admin", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "des", children: "Description" }), (0, jsx_runtime_1.jsx)("textarea", { name: "des", id: "des", value: description !== null && description !== void 0 ? description : '', onChange: e => desChangeHandler(e) })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { id: "social-media", children: [orders.map(key => (0, jsx_runtime_1.jsx)(AdminContext_1.AdminElementContext.Provider, { value: key, children: (0, jsx_runtime_1.jsx)(SocialTag_1.default, {}, key) }, key)), Object.keys(data).map(key => !exclude.includes(key) && (0, jsx_runtime_1.jsx)(AdminContext_1.AdminElementContext.Provider, { value: key, children: (0, jsx_runtime_1.jsx)(SocialTag_1.default, {}, key) }, key))] }), (0, jsx_runtime_1.jsx)(SaveDefault_1.default, {})] }) }));
};
exports.default = InfoArea;
