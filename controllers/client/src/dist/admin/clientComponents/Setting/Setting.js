"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const W_1 = require("../../../client/src/Web-Development/W");
const AdminContext_1 = require("../AdminContext");
const Delete_1 = __importDefault(require("../Delete/Delete"));
const ElementMap_1 = require("../ElementMap");
const Background_1 = __importDefault(require("./Background"));
const Font_1 = __importDefault(require("./Font"));
const FontColor_1 = __importDefault(require("./FontColor"));
const FontSize_1 = __importDefault(require("./FontSize"));
const Reducer_1 = __importDefault(require("./Reducer"));
const SavePDF_1 = __importDefault(require("./SavePDF"));
const Setting = ({ data, css, resource }) => {
    const [state, dispatch] = (0, react_1.useReducer)(Reducer_1.default, {
        background: false,
        font: false,
        fontSize: false,
        fontColor: false
    });
    (0, react_1.useEffect)(() => {
        document.addEventListener('click', e => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const ele = e.target;
            if (((_a = document.querySelector(".background")) === null || _a === void 0 ? void 0 : _a.contains(ele)) || ((_b = document.querySelector("#W_colorPicker")) === null || _b === void 0 ? void 0 : _b.contains(ele)) || ((_c = document.querySelector("#colorOptionsInBackground")) === null || _c === void 0 ? void 0 : _c.contains(ele))) {
                dispatch({ type: 'background', value: true });
            }
            else if (((_d = document.querySelector(".font")) === null || _d === void 0 ? void 0 : _d.contains(ele)) || ((_e = document.querySelector("#fontOptions")) === null || _e === void 0 ? void 0 : _e.contains(ele))) {
                dispatch({ type: 'font', value: true });
            }
            else if (((_f = document.querySelector(".fontSize")) === null || _f === void 0 ? void 0 : _f.contains(ele)) || ((_g = document.querySelector("#W_rangeSlider")) === null || _g === void 0 ? void 0 : _g.contains(ele))) {
                dispatch({ type: 'fontSize', value: true });
            }
            else if (((_h = document.querySelector(".fontColor")) === null || _h === void 0 ? void 0 : _h.contains(ele)) || ((_j = document.querySelector("#colorOptions")) === null || _j === void 0 ? void 0 : _j.contains(ele))) {
                dispatch({ type: 'fontColor', value: true });
            }
            else {
                dispatch({ type: 'background', value: false });
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(AdminContext_1.AdminContext.Provider, { value: data, children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminCssContext.Provider, { value: css, children: (0, jsx_runtime_1.jsx)(AdminContext_1.AdminSettingContext.Provider, { value: [state, dispatch], children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsxs)("div", { id: "setting_board", className: 'flex gap-1', children: [state.background && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(W_1.ColorPickerGradient, { keyValue: "W_colorPicker", defaultColor: css.background, cb: color => {
                                                css.background = color;
                                                $("#template__background").css({
                                                    background: color
                                                });
                                            } }), (0, jsx_runtime_1.jsx)(W_1.Options, { keyValue: "colorOptionsInBackground", Face: W_1.ColorType, list: ElementMap_1.solidColors, cb: color => {
                                                css.fontColor = color;
                                                $("#template__background").css({
                                                    background: color
                                                });
                                            } })] })), state.font && (0, jsx_runtime_1.jsx)(W_1.Options, { keyValue: "fontOptions", Face: W_1.FontType, face: "A", list: ElementMap_1.fonts, cb: font => {
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
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { id: "setting_bar", className: 'flex flex-row gap-[10px] p-[10px] items-center overflow-auto', style: { scrollbarWidth: 'none' }, children: [(0, jsx_runtime_1.jsx)(Background_1.default, {}), (0, jsx_runtime_1.jsx)(Font_1.default, {}), (0, jsx_runtime_1.jsx)(FontSize_1.default, {}), (0, jsx_runtime_1.jsx)(FontColor_1.default, {}), (0, jsx_runtime_1.jsx)(SavePDF_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "h-auto flex-shrink-0", children: (0, jsx_runtime_1.jsx)(Delete_1.default, { message: resource.deleteWarning }) })] })] }) }) }) }));
};
exports.default = Setting;
