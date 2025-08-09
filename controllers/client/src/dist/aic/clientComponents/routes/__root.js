import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import SideBar from "../sideBar/SideBar";
import useThemeContext from "../../../client/clientComponents/context/theme";
import { Toaster } from "react-hot-toast";
export const Route = createRootRoute({
    component: RootComponent
});
function RootComponent() {
    const theme = useThemeContext();
    const classes = `${theme === null || theme === void 0 ? void 0 : theme.classes.bg} flex flex-row`;
    return (_jsxs("div", { className: classes, children: [_jsx(SideBar, {}), _jsx(Outlet, {}), _jsx(Toaster, {})] }));
}
