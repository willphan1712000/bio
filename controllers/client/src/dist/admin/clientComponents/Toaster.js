import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Toaster = ({ msg }) => {
    return (_jsxs("div", { id: "toaster", children: [_jsxs("div", { className: "msg successMsg", children: [_jsx("i", { className: "fa-solid fa-check" }), _jsx("p", { children: "Updated!" })] }), _jsxs("div", { className: "msg errorMsg", children: [_jsx("i", { className: "fa-solid fa-x" }), _jsx("p", { children: "Internal Error!" })] }), _jsxs("div", { className: "msg notValidForm", children: [_jsx("i", { className: "fa-solid fa-x" }), _jsx("p", { children: msg })] })] }));
};
export default Toaster;
