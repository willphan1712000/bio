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
const W_1 = require("../../../client/src/Web-Development/W");
const AdminContext_1 = require("../AdminContext");
const AdminContextProvider_1 = __importDefault(require("../AdminContextProvider"));
const AvatarTemplate_1 = __importDefault(require("../Avatar/AvatarTemplate"));
const Delete_1 = __importDefault(require("../Delete/Delete"));
const ElementMap_1 = require("../ElementMap");
const SocialTag_1 = __importDefault(require("../SocialTag"));
const Background_1 = __importDefault(require("./Background"));
const Font_1 = __importDefault(require("./Font"));
const FontColor_1 = __importDefault(require("./FontColor"));
const FontSize_1 = __importDefault(require("./FontSize"));
const Reducer_1 = __importStar(require("./Reducer"));
const SavePDF_1 = __importDefault(require("./SavePDF"));
const Save_1 = __importDefault(require("./Save"));
const Reset_1 = __importDefault(require("./Reset"));
const Bio_1 = __importDefault(require("./Bio"));
const Setting = ({ data, css, resource }) => {
    const [state, dispatch] = (0, react_1.useReducer)(Reducer_1.default, {
        background: false,
        font: false,
        fontSize: false,
        fontColor: false,
        input: false,
        inputName: ''
    });
    (0, react_1.useEffect)(() => {
        document.addEventListener('click', e => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const ele = e.target;
            const elementclicked = (0, Reducer_1.elementClicked)(data, ele);
            if (((_a = document.querySelector(".background")) === null || _a === void 0 ? void 0 : _a.contains(ele)) || ((_b = document.querySelector("#W_colorPicker")) === null || _b === void 0 ? void 0 : _b.contains(ele)) || ((_c = document.querySelector("#colorOptionsInBackground")) === null || _c === void 0 ? void 0 : _c.contains(ele))) {
                dispatch({ type: 'background' });
            }
            else if (((_d = document.querySelector(".font")) === null || _d === void 0 ? void 0 : _d.contains(ele)) || ((_e = document.querySelector("#fontOptions")) === null || _e === void 0 ? void 0 : _e.contains(ele))) {
                dispatch({ type: 'font' });
            }
            else if (((_f = document.querySelector(".fontSize")) === null || _f === void 0 ? void 0 : _f.contains(ele)) || ((_g = document.querySelector("#W_rangeSlider")) === null || _g === void 0 ? void 0 : _g.contains(ele))) {
                dispatch({ type: 'fontSize' });
            }
            else if (((_h = document.querySelector(".fontColor")) === null || _h === void 0 ? void 0 : _h.contains(ele)) || ((_j = document.querySelector("#colorOptions")) === null || _j === void 0 ? void 0 : _j.contains(ele))) {
                dispatch({ type: 'fontColor' });
            }
            else if (elementclicked.status) {
                dispatch({ type: 'input' });
                dispatch({ type: 'inputName', value: elementclicked.element });
            }
            else if ((_k = document.querySelector("#inputElement")) === null || _k === void 0 ? void 0 : _k.contains(ele)) {
                dispatch({ type: 'input' });
            }
            else {
                dispatch({ type: 'all' });
            }
        });
        const template = document.querySelector("#text");
        template.addEventListener('input', e => {
            const target = e.target;
            const name = $(target).data('name');
            const $ele = $("[data-name=" + name + "]");
            if (['name', 'position', 'organization'].includes(name)) {
                data[name] = target.value;
                $ele.val(target.value);
            }
            else {
                data['description'] = target.value;
            }
        });
    }, []);
    const background = document.getElementById("template__background");
    return ((0, jsx_runtime_1.jsxs)(AdminContextProvider_1.default, { data: data, css: css, regex: resource.regexMap, label: resource.labelMap, setting: [state, dispatch], children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsxs)("div", { id: "setting_board", className: 'flex gap-1', children: [state.background && (background ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(W_1.ColorPickerGradient, { keyValue: "W_colorPicker", defaultColor: css.background, cb: color => {
                                            css.background = color;
                                            $(background).css({
                                                background: color
                                            });
                                        } }), (0, jsx_runtime_1.jsx)(W_1.Options, { keyValue: "colorOptionsInBackground", Face: W_1.ColorType, list: ElementMap_1.solidColors, cb: color => {
                                            css.background = color;
                                            $(background).css({
                                                background: color
                                            });
                                        } })] })) : (0, jsx_runtime_1.jsx)("div", { className: 'flex items-center justify-center size-full rounded-[2rem] bg-white mx-[1rem] text-center', style: { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }, children: (0, jsx_runtime_1.jsx)("p", { children: "This template does not allow background change" }) })), state.font && (0, jsx_runtime_1.jsx)(W_1.Options, { keyValue: "fontOptions", Face: W_1.FontType, face: "A", list: ElementMap_1.fonts, cb: font => {
                                    css.font = font;
                                    $(".template__font").css({
                                        fontFamily: font
                                    });
                                } }), state.fontSize && (0, jsx_runtime_1.jsx)(W_1.RangeSlider, { keyValue: "W_rangeSlider", range: { min: 0, max: 25 }, defaultValue: parseInt(css.fontSize.replace("px", '')), cb: value => {
                                    css.fontSize = value + "px";
                                    $(".template__font").css('font-size', value);
                                    $(".template_name").css('font-size', (value + 15));
                                } }), state.fontColor && (0, jsx_runtime_1.jsx)(W_1.Options, { keyValue: "colorOptions", Face: W_1.ColorType, list: ElementMap_1.solidColors, cb: color => {
                                    css.fontColor = color;
                                    $(".template__font").css({
                                        color
                                    });
                                } }), state.input && ((0, jsx_runtime_1.jsx)(AdminContext_1.AdminElementContext.Provider, { value: state.inputName, children: (0, jsx_runtime_1.jsx)("div", { className: 'w-full bg-white rounded-[20px] mx-4 p-1', id: "inputElement", children: (0, jsx_runtime_1.jsx)(SocialTag_1.default, {}) }) }))] }), (0, jsx_runtime_1.jsx)(SettingBar, { resource: resource })] }), (0, jsx_runtime_1.jsx)(AvatarSave, {})] }));
};
const SettingBar = (0, react_1.memo)(({ resource }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { id: "setting_bar", className: '[&::-webkit-scrollbar]:hidden flex flex-row gap-[10px] p-[10px] items-center overflow-auto', style: { scrollbarWidth: 'none' }, children: [(0, jsx_runtime_1.jsx)(Bio_1.default, {}), (0, jsx_runtime_1.jsx)(Background_1.default, {}), (0, jsx_runtime_1.jsx)(Font_1.default, {}), (0, jsx_runtime_1.jsx)(FontSize_1.default, {}), (0, jsx_runtime_1.jsx)(FontColor_1.default, {}), (0, jsx_runtime_1.jsx)(Reset_1.default, {}), (0, jsx_runtime_1.jsx)(SavePDF_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "h-auto flex-shrink-0", children: (0, jsx_runtime_1.jsx)(Delete_1.default, { message: resource.deleteWarning }) })] }));
});
const AvatarSave = (0, react_1.memo)(() => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AvatarTemplate_1.default, {}), (0, jsx_runtime_1.jsx)(Save_1.default, {})] }));
});
exports.default = Setting;
