import { createContext, useContext } from "react";

export type ThemeContextType = {
    classes: {
        bg: string,
        border: string,
        hover: string,
        text: string,
        container: string
    }
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error("useThemeContext must be defined within a ThemeProvider")
    }
    return context
}

export default useThemeContext