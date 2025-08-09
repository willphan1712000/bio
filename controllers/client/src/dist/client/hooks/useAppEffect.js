import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import toast from "react-hot-toast";
import AppToaster from "../clientComponents/AppToaster";
export default function useAppEffect(error) {
    useEffect(() => {
        if (error) {
            toast(_jsx(AppToaster, { message: error.message }));
        }
    }, [error]);
}
