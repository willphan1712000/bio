"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const io_1 = require("react-icons/io");
const AppToaster = ({ status = false, message = '' }) => {
    if (typeof message !== 'string') {
        console.log(message);
        message = 'Error...';
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-row items-center gap-2', children: [status ? (0, jsx_runtime_1.jsx)(fa_1.FaCheckCircle, { color: 'green', size: "25" }) : (0, jsx_runtime_1.jsx)(io_1.IoMdCloseCircle, { color: 'red', size: "25" }), message] }));
};
exports.default = AppToaster;
