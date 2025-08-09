import { jsx as _jsx } from "react/jsx-runtime";
const FontType = ({ value, face }) => {
    return (_jsx("p", { style: { fontFamily: value === null || value === void 0 ? void 0 : value.toString() }, className: "size-full flex justify-center items-center pointer-events-none", children: face === undefined ? '' : face }));
};
export default FontType;
