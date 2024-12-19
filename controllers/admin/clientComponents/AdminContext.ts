import { createContext } from "react";

export const AdminContext = createContext<{[key: string]: string} | undefined>(undefined)

export const AdminElementContext = createContext<string | undefined>(undefined)

export default function handleAdminContext() : React.Context<any> {
    if(AdminContext === undefined) {
        throw new Error("Admin context is undefined")
    }
    return AdminContext
}

export function handleAdminElementContext() : React.Context<any> {
    if(AdminContext === undefined) {
        throw new Error("Admin element context is undefined")
    }
    return AdminElementContext
}
