import { createContext, useContext } from "react";

type Admin = {[key: string]: string} | undefined
type Element = string | undefined
type Image = [state: State, action: React.Dispatch<Action>] | undefined
export type State = {
    isUpload: boolean,
    isEdit: boolean,
    mainSrc: string,
    initialSrc: string,
    previewSrc: string
}
export type Action = | {type: 'upload'} | {type: 'main', value: any} | {type: 'initial', value: any} | {type: 'preview', value: any} | {type: 'edit'}

export const AdminContext = createContext<Admin>(undefined)

export const AdminRegexContext = createContext<Admin>(undefined)

export const AdminElementContext = createContext<Element>(undefined)

export const AdminImageContext = createContext<Image>(undefined)

export default function handleAdminContext() {
    const data = useContext(AdminContext)
    if(data === undefined) {
        throw new Error("Admin context is undefined")
    }
    return data
}

export function handleAdminRegexContext() {
    const data = useContext(AdminRegexContext)
    if(data === undefined) {
        throw new Error("Admin regex context is undefined")
    }
    return data
}

export function handleAdminElementContext() {
    const data = useContext(AdminElementContext)
    if(data === undefined) {
        throw new Error("Admin element context is undefined")
    }
    return data
}

export function handleAdminImageContext() {
    const data = useContext(AdminImageContext)
    if(data === undefined) {
        throw new Error("Admin image context is undefined")
    }
    return data
}

export function username(): string {
    const path = window.location.pathname
    return path.split("/")[1]
}