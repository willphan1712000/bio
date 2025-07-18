import { TbLayoutDashboard } from "react-icons/tb";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import { MdLogout } from "react-icons/md";


export default Object.freeze({
    sideBarTabs: {
        dashboard: {
            name: "Dashboard",
            icon: <TbLayoutDashboard size="20"/>
        },
        management: {
            name: "Template Management",
            icon: <BiAnalyse size="20" />
        },
        price: {
            name: "Template Price",
            icon: <FaMoneyCheckAlt size="20"/>
        },
        logout: {
            name: "Logout",
            icon: <MdLogout size="20" />
        }
    }
})