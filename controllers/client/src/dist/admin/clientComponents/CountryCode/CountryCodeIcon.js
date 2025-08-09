import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import handleAdminContext, { handleAdminElementContext } from "../AdminContext";
const CountryCodeIcon = ({ buttonRef, onCallBack }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const name = handleAdminElementContext();
    const data = handleAdminContext();
    let flag = '', code = '';
    switch (name) {
        case 'Mobile':
            flag = (_a = data['MobileFlag']) !== null && _a !== void 0 ? _a : 'us';
            code = (_b = data['MobileCode']) !== null && _b !== void 0 ? _b : '+1';
            break;
        case 'Work':
            flag = (_c = data['WorkFlag']) !== null && _c !== void 0 ? _c : 'us';
            code = (_d = data['WorkCode']) !== null && _d !== void 0 ? _d : '+1';
            break;
        case 'Viber':
            flag = (_e = data['ViberFlag']) !== null && _e !== void 0 ? _e : 'us';
            code = (_f = data['ViberCode']) !== null && _f !== void 0 ? _f : '+1';
            break;
        case 'HotLine':
            flag = (_g = data['HotLineFlag']) !== null && _g !== void 0 ? _g : 'us';
            code = (_h = data['HotLineCode']) !== null && _h !== void 0 ? _h : '+1';
            break;
        case 'Whatsapp':
            flag = (_j = data['WhatsappFlag']) !== null && _j !== void 0 ? _j : 'us';
            code = (_k = data['WhatsappCode']) !== null && _k !== void 0 ? _k : '+1';
            break;
        default:
            break;
    }
    return (_jsxs("div", { onClick: () => onCallBack(), className: "countryCode p-[2px] flex flex-row rounded-[10px] bg-white h-auto mr-[5px] cursor-pointer", "data-index": true, "data-flag": true, "data-code": true, ref: buttonRef, children: [_jsx("div", { className: "flag w-[40px] p-[5px] !flex items-center", children: _jsx("img", { draggable: false, className: 'w-full h-full', src: `/controllers/admin/clientComponents/CountryCode/flags/${flag.toLowerCase()}.png` }) }), _jsx("p", { className: "code !flex items-center p-[2px]", children: code }), _jsx("i", { className: "fa-solid fa-caret-down !flex items-center p-[2px]" })] }));
};
export default CountryCodeIcon;
