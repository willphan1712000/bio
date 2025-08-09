import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import CountryCodeDropDown from './CountryCodeDropDown';
import CountryCodeIcon from './CountryCodeIcon';
const CountryCode = () => {
    const [isListShown, setShown] = useState(false);
    const listRef = useRef(null);
    const buttonRef = useRef(null);
    function setDropDown() {
        setShown(!isListShown);
    }
    useEffect(() => {
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
    return (_jsxs(_Fragment, { children: [_jsx(CountryCodeIcon, { onCallBack: setDropDown, buttonRef: buttonRef }), _jsx(CountryCodeDropDown, { setDropDown: setDropDown, isListShown: isListShown, listRef: listRef })] }));
};
export default CountryCode;
