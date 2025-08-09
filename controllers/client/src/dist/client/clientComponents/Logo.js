import { jsx as _jsx } from "react/jsx-runtime";
import AppImage from "./AppImage";
const Logo = () => {
    return (_jsx("a", { href: "/", children: _jsx(AppImage, { src: "/controllers/client/img/logo.png", className: 'w-full' }) }));
};
export default Logo;
