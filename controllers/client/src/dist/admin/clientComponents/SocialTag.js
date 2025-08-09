import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { handleAdminElementContext, handleAdminIconContext } from './AdminContext';
import CountryCode from './CountryCode/CountryCode';
import Input from './Input';
const SocialTag = () => {
    const name = handleAdminElementContext();
    const iconMap = handleAdminIconContext();
    return (_jsxs("div", { className: `social ${name}`, children: [_jsx("div", { className: "social__img info__img aspect-[1/2] flex justify-center items-center flex-col relative p-[10px]", dangerouslySetInnerHTML: { __html: iconMap[name] } }), _jsx("div", { className: 'social__tool flex items-center', children: _jsx("div", { className: "social__tool--wrapper flex items-center relative h-auto", children: ['Mobile', 'Work', 'Viber', 'Whatsapp'].includes(name) && _jsx(CountryCode, {}) }) }), _jsx("div", { className: "social__info info__about flex flex-col justify-center my-0 mx-[10px] flex-grow-1 w-full", children: _jsx(Input, { inputLabelColor: '#f6f2ff' }) })] }));
};
export default SocialTag;
