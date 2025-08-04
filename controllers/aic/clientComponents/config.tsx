import { TbLayoutDashboard } from "react-icons/tb";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";


export default Object.freeze({
    sideBarTabs: {
        dashboard: {
            name: "Dashboard",
            icon: <TbLayoutDashboard size="20"/>,
            to: "/"
        },
        management: {
            name: "Template Management",
            icon: <BiAnalyse size="20" />,
            to: "/@upload"
        },
        price: {
            name: "Template Price",
            icon: <FaMoneyCheckAlt size="20"/>,
            to: "/@price"
        },
        logout: {
            name: "Logout",
            icon: <MdLogout size="20" />,
            to: "/@logout"
        }
    },
    collapse: {
        name: "Collapse Menu",
        icon: <TbLayoutSidebarLeftCollapseFilled />
    },
    message: {
        user: {
            terminateTitle: "Terminate this user",
            terminateMsg: "Are you sure to do this? This will delete user and all related information.",
        },
        template: {
            terminateTitle: "Terminate this template",
            terminateMsg: "Are you sure to do this? This will delete the template and all related files. This will also be reflected on the template page seen by all customers."
        }
    }
})