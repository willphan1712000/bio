import { createContext, useContext } from "react";

type Admin = {[key: string]: string | null} | undefined
type Element = string | undefined
type Image = [state: State, action: React.Dispatch<Action>] | undefined
export type State = {
    isUpload: boolean,
    mainSrc: string,
    previewSrc: string,
    isDelete: boolean,
}
export type Action = {type: 'upload' | 'main' | 'preview' | 'delete', value?: string}

type Save = [state: SaveState, action: React.Dispatch<SaveAction>] | undefined

export type SaveState = {
    isSubmitting: boolean,
    isShow: boolean,
    disabled: boolean,
    msg: string,
    default: string
}
export type SaveAction = {type: 'submit' | 'show' | 'message' | 'disable' | 'default', value?: string}

type Delete = [state: DeleteState, action : React.Dispatch<DeleteAction>] | undefined

export type DeleteState = {
    show: boolean,
    username: string,
    message: {[key: string]: string},
    isDeleting: boolean,
    msg: string,
    disabled: boolean
}

export type DeleteAction = | {type: 'show' | 'delete' | 'disable' | 'msg', value?: string}

export type SettingState = {
    background: boolean,
    font: boolean,
    fontSize: boolean,
    fontColor: boolean,
    input: boolean,
    inputName: string
}

export type SettingAction = | {type: 'background' | 'font' | 'fontSize' | 'fontColor' | 'input' | 'inputName' | 'all', value?: string}

type Setting = [state: SettingState, action: React.Dispatch<SettingAction>] | undefined

export const AdminContext = createContext<Admin>(undefined)

export const AdminCssContext = createContext<Admin>(undefined)

export const AdminRegexContext = createContext<Admin>(undefined)

export const AdminElementContext = createContext<Element>(undefined)

export const AdminImageContext = createContext<Image>(undefined)

export const AdminSaveContext = createContext<Save>(undefined)

export const AdminDeleteContext = createContext<Delete>(undefined)

export const AdminLabelContext = createContext<Admin>(undefined)

export const AdminSettingContext = createContext<Setting>(undefined)

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

export function handleAdminSaveContext() {
    const data = useContext(AdminSaveContext)
    if(data === undefined) {
        throw new Error("Admin save context is undefined")
    }
    return data
}

export function handleAdminDeleteContext() {
    const data = useContext(AdminDeleteContext)
    if(data === undefined) {
        throw new Error("Admin delete context is undefined")
    }
    return data
}

export function handleAdminLabelContext() {
    const data = useContext(AdminLabelContext)
    if(data === undefined) {
        throw new Error("Admin label context is undefined")
    }
    return data
}

export function handleAdminSettingContext() {
    const data = useContext(AdminSettingContext)
    if(data === undefined) {
        throw new Error("Admin setting context is undefined")
    }
    return data
}

export function handleAdminCssContext() {
    const data = useContext(AdminCssContext)
    if(data === undefined) {
        throw new Error("Admin CSS context is undefined")
    }
    return data
}

export function username(): string {
    const path = window.location.pathname
    return path.split("/")[1]
}
