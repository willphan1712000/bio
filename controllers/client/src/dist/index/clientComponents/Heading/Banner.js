import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clientConfig from "../../clientConfig";
import AppImage from "../../../client/clientComponents/AppImage";
import Signin from "../Signin";
import Template from "../Template";
const Banner = () => {
    return (_jsx("div", { className: "lg:p-[100px] p-[40px] flex flex-row justify-center max-w-[1500px]", children: _jsxs("div", { className: 'flex lg:flex-row flex-col content-center w-full justify-between items-center', children: [_jsxs("div", { className: 'flex flex-col lg:w-[70%] w-full', children: [_jsx("h1", { className: "text-[50px] font-bold", children: clientConfig.heading.title }), _jsxs("p", { className: "text-[25px] font-bold", children: [clientConfig.heading.des1, _jsx("span", { className: "text-[25px] font-bold py-2 px-3 text-white bg-[--primary] rounded-full whitespace-nowrap overflow-hidden text-ellipsis", children: clientConfig.heading.desSpan }), clientConfig.heading.des2] }), _jsxs("div", { className: "flex lg:flex-row flex-col gap-5 pt-10 items-center", children: [_jsx("div", { className: "w-fit", children: _jsx(Signin, { content: 'Create Your Profile Now' }) }), _jsx("div", { className: "w-fit", children: _jsx(Template, { content: "Explore Templates" }) })] })] }), _jsx("div", { className: "w-[20%] rounded-[40px] overflow-hidden lg:flex hidden max-w-[400px]", children: _jsx(AppImage, { src: clientConfig.heading.img, className: "size-full" }) })] }) }));
};
export default Banner;
