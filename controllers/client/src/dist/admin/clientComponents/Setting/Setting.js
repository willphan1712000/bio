import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useReducer } from 'react';
import { ColorPickerGradient, ColorType, FontType, Options, RangeSlider } from '../../../client/src/Web-Development/W';
import { AdminElementContext } from '../AdminContext';
import AdminContextProvider from '../AdminContextProvider';
import AvatarTemplate from '../Avatar/AvatarTemplate';
import Delete from '../Delete/Delete';
import { fonts, solidColors } from '../ElementMap';
import SocialTag from '../SocialTag';
import Background from './Background';
import Font from './Font';
import FontColor from './FontColor';
import FontSize from './FontSize';
import reducer, { elementClicked } from './Reducer';
import SavePDF from './SavePDF';
import Save from './Save';
import Reset from './Reset';
import Bio from './Bio';
const Setting = ({ data, css, resource }) => {
    const [state, dispatch] = useReducer(reducer, {
        background: false,
        font: false,
        fontSize: false,
        fontColor: false,
        input: false,
        inputName: ''
    });
    useEffect(() => {
        document.addEventListener('click', e => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const ele = e.target;
            const elementclicked = elementClicked(data, ele);
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
    return (_jsxs(AdminContextProvider, { data: data, css: css, regex: resource.regexMap, label: resource.labelMap, iconMap: resource.iconMap, setting: [state, dispatch], children: [_jsxs("div", { className: 'flex flex-col', children: [_jsxs("div", { id: "setting_board", className: 'flex gap-1', children: [state.background && (background ? (_jsxs(_Fragment, { children: [_jsx(ColorPickerGradient, { keyValue: "W_colorPicker", defaultColor: css.background, cb: color => {
                                            css.background = color;
                                            $(background).css({
                                                background: color
                                            });
                                        } }), _jsx(Options, { keyValue: "colorOptionsInBackground", Face: ColorType, list: solidColors, cb: color => {
                                            css.background = color;
                                            $(background).css({
                                                background: color
                                            });
                                        } })] })) : _jsx("div", { className: 'flex items-center justify-center size-full rounded-[2rem] bg-white mx-[1rem] text-center', style: { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }, children: _jsx("p", { children: "This template does not allow background change" }) })), state.font && _jsx(Options, { keyValue: "fontOptions", Face: FontType, face: "A", list: fonts, cb: font => {
                                    css.font = font;
                                    $(".template__font").css({
                                        fontFamily: font
                                    });
                                } }), state.fontSize && _jsx(RangeSlider, { keyValue: "W_rangeSlider", range: { min: 0, max: 25 }, defaultValue: parseInt(css.fontSize.replace("px", '')), cb: value => {
                                    css.fontSize = value + "px";
                                    $(".template__font").css('font-size', value);
                                    $(".template_name").css('font-size', (value + 15));
                                } }), state.fontColor && _jsx(Options, { keyValue: "colorOptions", Face: ColorType, list: solidColors, cb: color => {
                                    css.fontColor = color;
                                    $(".template__font").css({
                                        color
                                    });
                                } }), state.input && (_jsx(AdminElementContext.Provider, { value: state.inputName, children: _jsx("div", { className: 'w-full bg-white rounded-[20px] mx-4 p-1', id: "inputElement", children: _jsx(SocialTag, {}) }) }))] }), _jsx(SettingBar, { resource: resource })] }), _jsx(AvatarSave, {})] }));
};
const SettingBar = memo(({ resource }) => {
    return (_jsxs("div", { id: "setting_bar", className: '[&::-webkit-scrollbar]:hidden flex flex-row gap-[10px] p-[10px] items-center overflow-auto', style: { scrollbarWidth: 'none' }, children: [_jsx(Bio, {}), _jsx(Background, {}), _jsx(Font, {}), _jsx(FontSize, {}), _jsx(FontColor, {}), _jsx(Reset, {}), _jsx(SavePDF, {}), _jsx("div", { className: "h-auto flex-shrink-0", children: _jsx(Delete, { message: resource.deleteWarning }) })] }));
});
const AvatarSave = memo(() => {
    return (_jsxs(_Fragment, { children: [_jsx(AvatarTemplate, {}), _jsx(Save, {})] }));
});
export default Setting;
