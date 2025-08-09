import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
const AppToaster = ({ status = false, message = '' }) => {
    if (typeof message !== 'string') {
        console.log(message);
        message = 'Error...';
    }
    return (_jsxs("div", { className: 'flex flex-row items-center gap-2', children: [status ? _jsx(FaCheckCircle, { color: 'green', size: "25" }) : _jsx(IoMdCloseCircle, { color: 'red', size: "25" }), message] }));
};
export default AppToaster;
