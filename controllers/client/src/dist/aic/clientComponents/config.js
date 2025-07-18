"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tb_1 = require("react-icons/tb");
const fa_1 = require("react-icons/fa");
const bi_1 = require("react-icons/bi");
const md_1 = require("react-icons/md");
const tb_2 = require("react-icons/tb");
exports.default = Object.freeze({
    sideBarTabs: {
        dashboard: {
            name: "Dashboard",
            icon: (0, jsx_runtime_1.jsx)(tb_1.TbLayoutDashboard, { size: "20" })
        },
        management: {
            name: "Template Management",
            icon: (0, jsx_runtime_1.jsx)(bi_1.BiAnalyse, { size: "20" })
        },
        price: {
            name: "Template Price",
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaMoneyCheckAlt, { size: "20" })
        },
        logout: {
            name: "Logout",
            icon: (0, jsx_runtime_1.jsx)(md_1.MdLogout, { size: "20" })
        }
    },
    collapse: {
        name: "Collapse Menu",
        icon: (0, jsx_runtime_1.jsx)(tb_2.TbLayoutSidebarLeftCollapseFilled, {})
    }
});
