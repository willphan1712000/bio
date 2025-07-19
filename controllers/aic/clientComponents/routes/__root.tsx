import { createRootRoute, Outlet } from "@tanstack/react-router";
import SideBar from "../sideBar/SideBar";
import useThemeContext from "../../../client/clientComponents/context/theme";


export const Route = createRootRoute({
    component: RootComponent
})

function RootComponent() {
    const theme = useThemeContext()
    const classes = `${theme?.classes.bg} h-full flex flex-row`

    return (
        <div className={classes}>
            <SideBar />
            <Outlet />
        </div>
    )
}