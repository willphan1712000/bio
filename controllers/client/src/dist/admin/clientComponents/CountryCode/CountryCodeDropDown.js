import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import handleAdminContext, { handleAdminElementContext } from "../AdminContext";
import codeList from "./codeList";
const CountryCodeDropDown = ({ isListShown, listRef, setDropDown }) => {
    const data = handleAdminContext();
    const name = handleAdminElementContext();
    const [list, setList] = useState(codeList);
    const [value, setValue] = useState('');
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
    const countryCodeClickHandler = (e, { dial_code, code }) => {
        e.stopPropagation();
        setCountryCode({ flag: code, code: dial_code });
        setDropDown();
    };
    const worker = new Worker('/controllers/client/src/dist/admin/clientComponents/CountryCode/worker.js');
    const onSearch = (e) => {
        let value = e.target.value;
        setValue(value);
        worker.postMessage({
            value,
            codeList
        });
    };
    worker.onmessage = function (e) {
        setList(e.data);
    };
    return (isListShown && (_jsxs("div", { style: top, className: "flex codeList !absolute flex-col left-0 h-[500%] bg-white rounded-[10px] z-[999] p-[5px]", ref: listRef, children: [_jsx("div", { className: "codeList__search", children: _jsx("input", { onChange: onSearch, name: "search", id: "searchCountry", type: "text", placeholder: "Search Country", defaultValue: value }) }), _jsx("div", { className: "codeList__list overflow-auto m-[5px]", children: list.map(country => _jsxs("div", { onClick: e => countryCodeClickHandler(e, country), className: "each flex flex-row justify-between p-[5px] cursor-pointer rounded-[10px] hover:bg-[#d9d9d9]", "data-flag": country.code, children: [_jsx("p", { children: country.name }), _jsx("p", { children: country.dial_code })] }, country.code)) })] })));
};
export default CountryCodeDropDown;
