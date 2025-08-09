import { jsx as _jsx } from "react/jsx-runtime";
const Separator = ({ thickness = "1" }) => {
    return (_jsx("div", { className: "w-full", style: { height: `${10 * parseInt(thickness)}px` } }));
};
export default Separator;
