import { jsx as _jsx } from "react/jsx-runtime";
const ColorType = ({ value, face }) => {
    return (_jsx("div", { style: { background: value === null || value === void 0 ? void 0 : value.toString() }, className: "size-full flex justify-center items-center pointer-events-none", children: face === undefined ? '' : face }));
};
export default ColorType;
