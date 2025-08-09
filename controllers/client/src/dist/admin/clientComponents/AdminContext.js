import { createContext, useContext } from "react";
export const AdminContext = createContext(undefined);
export const AdminCssContext = createContext(undefined);
export const AdminRegexContext = createContext(undefined);
export const AdminElementContext = createContext(undefined);
export const AdminImageContext = createContext(undefined);
export const AdminSaveContext = createContext(undefined);
export const AdminDeleteContext = createContext(undefined);
export const AdminLabelContext = createContext(undefined);
export const AdminIconContext = createContext(undefined);
export const AdminSettingContext = createContext(undefined);
export default function handleAdminContext() {
    const data = useContext(AdminContext);
    if (data === undefined) {
        throw new Error("Admin context is undefined");
    }
    return data;
}
export function handleAdminRegexContext() {
    const data = useContext(AdminRegexContext);
    if (data === undefined) {
        throw new Error("Admin regex context is undefined");
    }
    return data;
}
export function handleAdminElementContext() {
    const data = useContext(AdminElementContext);
    if (data === undefined) {
        throw new Error("Admin element context is undefined");
    }
    return data;
}
export function handleAdminImageContext() {
    const data = useContext(AdminImageContext);
    if (data === undefined) {
        throw new Error("Admin image context is undefined");
    }
    return data;
}
export function handleAdminSaveContext() {
    const data = useContext(AdminSaveContext);
    if (data === undefined) {
        throw new Error("Admin save context is undefined");
    }
    return data;
}
export function handleAdminDeleteContext() {
    const data = useContext(AdminDeleteContext);
    if (data === undefined) {
        throw new Error("Admin delete context is undefined");
    }
    return data;
}
export function handleAdminLabelContext() {
    const data = useContext(AdminLabelContext);
    if (data === undefined) {
        throw new Error("Admin label context is undefined");
    }
    return data;
}
export function handleAdminIconContext() {
    const data = useContext(AdminIconContext);
    if (data === undefined) {
        throw new Error("Admin icon context is undefined");
    }
    return data;
}
export function handleAdminSettingContext() {
    const data = useContext(AdminSettingContext);
    if (data === undefined) {
        throw new Error("Admin setting context is undefined");
    }
    return data;
}
export function handleAdminCssContext() {
    const data = useContext(AdminCssContext);
    if (data === undefined) {
        throw new Error("Admin CSS context is undefined");
    }
    return data;
}
export function username() {
    const path = window.location.pathname;
    return path.split("/")[1];
}
