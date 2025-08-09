import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TiPlus } from "react-icons/ti";
import clientConfig from "../../clientConfig";
import AppImage from "../../../client/clientComponents/AppImage";
const Card = ({ product = clientConfig.default_product }) => {
    return (_jsx("a", { href: product.url, target: "", children: _jsxs("div", { className: 'bg-[--apple] rounded-[40px] w-[300px] h-[400px] overflow-hidden relative', children: [_jsx(AppImage, { src: product.thumbnails, className: 'size-full object-cover' }), _jsx("div", { className: "absolute bottom-5 right-5 rounded-full bg-[--apple] size-[50px] flex justify-center items-center", children: _jsx(TiPlus, { size: "20" }) })] }) }));
};
export default Card;
