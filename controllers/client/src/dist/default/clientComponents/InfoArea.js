import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { AdminElementContext } from '../../admin/clientComponents/AdminContext';
import Avatar from '../../admin/clientComponents/Avatar/Avatar';
import Input from '../../admin/clientComponents/Input';
import SaveDefault from '../../admin/clientComponents/Save/SaveDefault';
import SocialTag from '../../admin/clientComponents/SocialTag';
import AdminContextProvider from '../../admin/clientComponents/AdminContextProvider';
const InfoArea = ({ data, extraData }) => {
    const [isLoading, setLoading] = useState(true);
    const [description, setDescription] = useState(data.description);
    function desChangeHandler(e) {
        setDescription(e.target.value);
        data.description = e.target.value;
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
    const orders = ['Email', 'Address', 'Mobile', 'Work', 'Viber', 'Whatsapp', 'HotLine', 'Menu', 'Booking', 'Website', 'OrderOnline', 'HotSale'];
    const exclude1 = ['username', 'name', 'image', 'organization', 'position', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode', 'ViberFlag', 'ViberCode', 'HotLineFlag', 'HotLineCode', 'WhatsappCode', 'WhatsappFlag'];
    const exclude = [...exclude1, ...orders];
    if (isLoading)
        return _jsx("div", { className: 'm-3', children: _jsx("p", { className: 'text-center', children: "Loading... Please Wait" }) });
    return (_jsx(_Fragment, { children: _jsxs(AdminContextProvider, { data: data, css: null, regex: extraData.regexMap, label: extraData.labelMap, iconMap: extraData.iconMap, setting: null, children: [_jsxs("div", { className: 'info', children: [_jsx("div", { className: "info__img info__img--ava", id: "avatar", children: _jsx(Avatar, {}) }), _jsxs("div", { className: "info__about", children: [_jsx("div", { className: "info__name my-[15px]", children: _jsx(AdminElementContext.Provider, { value: 'name', children: _jsx(Input, { inputLabelColor: '#fff', name: 'name' }) }) }), _jsx("div", { className: "info__position my-[15px]", children: _jsx(AdminElementContext.Provider, { value: 'position', children: _jsx(Input, { inputLabelColor: '#fff', name: 'position' }) }) }), _jsx("div", { className: "info__org my-[15px]", children: _jsx(AdminElementContext.Provider, { value: 'organization', children: _jsx(Input, { inputLabelColor: '#fff', name: 'organization' }) }) }), _jsxs("div", { className: "info__des admin", children: [_jsx("label", { htmlFor: "des", children: "Description" }), _jsx("textarea", { name: "des", id: "des", value: description !== null && description !== void 0 ? description : '', onChange: e => desChangeHandler(e) })] })] })] }), _jsxs("div", { id: "social-media", children: [orders.map(key => _jsx(AdminElementContext.Provider, { value: key, children: _jsx(SocialTag, {}, key) }, key)), Object.keys(data).map(key => !exclude.includes(key) && _jsx(AdminElementContext.Provider, { value: key, children: _jsx(SocialTag, {}, key) }, key))] }), _jsx(SaveDefault, {})] }) }));
};
export default InfoArea;
