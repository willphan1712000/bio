import { createContext, Dispatch, SetStateAction, useContext } from "react"

export type CollapseContextType = {
    isCollapse: boolean,
    setCollapse: Dispatch<SetStateAction<boolean>>
}

export const CollapseContext = createContext<CollapseContextType | undefined>(undefined)

const useCollapseContext = () => {
    const context = useContext(CollapseContext)
    if(context === undefined) {
        throw new Error("useCollapseContext is undefined and must be used within CollapseContext.")
    }

    return context
}

export default useCollapseContext