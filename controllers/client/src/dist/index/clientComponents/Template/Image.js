import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import AppImage from "../../../client/clientComponents/AppImage";
const Image = React.forwardRef((props, ref) => {
    const { url } = props;
    return (_jsx("div", { className: "absolute top-0 opacity-0 size-full p-10 flex flex-row items-center overflow-hidden", ref: ref, children: _jsx("div", { className: "overflow-hidden rounded-3xl size-full", children: _jsx(AppImage, { src: url, className: "size-full object-cover" }) }) }));
});
export default Image;
