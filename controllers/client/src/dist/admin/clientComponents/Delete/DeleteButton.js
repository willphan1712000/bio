"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminContext_1 = require("../AdminContext");
const DeleteButton = () => {
    const [, dispatch] = (0, AdminContext_1.handleAdminDeleteContext)();
    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'show' });
        $("body").css({
            overflow: "hidden"
        });
    }
    return ((0, jsx_runtime_1.jsx)("button", { onClick: (e) => handleClick(e), className: "rounded-xl bg-red-500 p-2 text-[13px] font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200 mt-[20px]", children: "Delete Account" }));
};
exports.default = DeleteButton;
