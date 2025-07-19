import { createRootRoute, Outlet } from "@tanstack/react-router";
import SideBar from "../sideBar/SideBar";

export const Route = createRootRoute({
    component: () => <SideBar />
})