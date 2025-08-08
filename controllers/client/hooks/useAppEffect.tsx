import { useEffect } from "react"
import toast from "react-hot-toast"
import AppToaster from "../clientComponents/AppToaster"

export default function useAppEffect(error: any) {
    useEffect(() => {
        if(error) {
            toast(
                <AppToaster message={error.message} />
            )
        }
    }, [error])
}