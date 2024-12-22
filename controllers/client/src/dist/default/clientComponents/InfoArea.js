"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminContext_1 = require("../../admin/clientComponents/AdminContext");
const SaveDefault_1 = __importDefault(require("../../admin/clientComponents/Save/SaveDefault"));
const SocialTag_1 = __importDefault(require("./SocialTag"));
const Input_1 = __importDefault(require("../../admin/clientComponents/Input"));
const InfoArea = ({ data, extraData }) => {
    const [isLoading, setLoading] = (0, react_1.useState)(true);
    const [description, setDescription] = (0, react_1.useState)(data.description);
    const src = (data.image === null || data.image === '') ? extraData.defaultImgPath : '/user/' + data.username + '/' + data.image;
    function desChangeHandler(e) {
        setDescription(e.target.value);
        data.description = e.target.value;
    }
    (0, react_1.useEffect)(() => {
        setLoading(false);
    });
    if (isLoading)
        return (0, jsx_runtime_1.jsx)("div", { className: 'm-3', children: (0, jsx_runtime_1.jsx)("p", { className: 'text-center', children: "Loading... Please Wait" }) });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminContext.Provider, { value: data, children: (0, jsx_runtime_1.jsxs)(AdminContext_1.AdminRegexContext.Provider, { value: extraData.regexMap, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'info', children: [(0, jsx_runtime_1.jsxs)("div", { className: "info__img info__img--ava", children: [(0, jsx_runtime_1.jsx)("input", { type: "file", className: "uploadImg", accept: "image/*", name: "uploadImg", hidden: true }), (0, jsx_runtime_1.jsx)("div", { className: "info__img--remove", children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-x" }) }), (0, jsx_runtime_1.jsx)("div", { className: "info__img--location", children: (0, jsx_runtime_1.jsx)("img", { draggable: false, src: src, alt: "avatar_admin" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "info__img--modify", children: (0, jsx_runtime_1.jsx)("div", { className: "info__img--choose", children: "Choose picture" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "info__about", children: [(0, jsx_runtime_1.jsx)("div", { className: "info__name my-[15px]", children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabelColor: '#fff', name: 'name' }) }), (0, jsx_runtime_1.jsx)("div", { className: "info__org my-[15px]", children: (0, jsx_runtime_1.jsx)(Input_1.default, { inputLabelColor: '#fff', name: 'organization' }) }), (0, jsx_runtime_1.jsxs)("div", { className: "info__des admin", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "des", children: "Description" }), (0, jsx_runtime_1.jsx)("textarea", { name: "des", id: "des", value: description, onChange: e => desChangeHandler(e) })] })] })] }), (0, jsx_runtime_1.jsx)("div", { id: "social-media", children: Object.keys(data).map(key => !['username', 'name', 'image', 'organization', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode'].includes(key) && (0, jsx_runtime_1.jsx)(AdminContext_1.AdminElementContext.Provider, { value: key, children: (0, jsx_runtime_1.jsx)(SocialTag_1.default, {}, key) }, key)) }), (0, jsx_runtime_1.jsx)(SaveDefault_1.default, {})] }) }) }));
};
exports.default = InfoArea;
