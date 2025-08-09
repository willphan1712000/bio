import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@willphan1712000/w';
import Logo from '../../../client/clientComponents/Logo';
import Info from './Info';
import Social from './Social';
import Copyright from './Copyright';
const Footer = () => {
    return (_jsx("div", { className: 'bg-[#111113] p-[30px] w-full flex flex-row justify-center rounded-t-[30px]', children: _jsxs("div", { className: ' max-w-[1000px]', children: [_jsxs("div", { className: 'flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start', children: [_jsx("div", { className: 'flex-1 w-[50%] max-w-[300px]', children: _jsx(Logo, {}) }), _jsx(Info, {}), _jsxs("div", { className: 'flex flex-[2] flex-col items-center gap-5', children: [_jsx(Button, { onClick: () => window.location.href = '/@template', type: "gradient", content: 'Templates' }), _jsxs("div", { className: 'flex flex-row gap-4', children: [_jsx(Button, { onClick: () => window.location.href = '/@signin', type: "solid", content: 'Sign in' }), _jsx(Button, { onClick: () => window.location.href = '/@signup', type: "solid", content: 'Sign up' })] })] })] }), _jsx("div", { className: 'border-b-[1px] border-b-white p-10' }), _jsx(Social, {}), _jsx(Copyright, {})] }) }));
};
export default Footer;
