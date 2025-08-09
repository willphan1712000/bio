import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useCollapseContext from "./context/collapse";
import useThemeContext from "../../../client/clientComponents/context/theme";
import { Link } from "@tanstack/react-router";
const Tab = ({ to, name, icon, onClick }) => {
    const theme = useThemeContext();
    const { isCollapse } = useCollapseContext();
    const className = `${theme.classes.hover} ${theme.classes.text} !w-auto h-[50px] !flex items-center !flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer border-[1px] border-transparent`;
    const pClasses = `md:flex hidden`;
    if (to)
        return (_jsxs(Link, { to: to, className: className, onClick: onClick, activeProps: {
                className: theme.classes.border
            }, children: [icon, !isCollapse && _jsx("p", { className: pClasses, children: name })] }));
    return (_jsxs("div", { className: className, onClick: onClick, children: [icon, !isCollapse && _jsx("p", { className: pClasses, children: name })] }));
};
export default Tab;
