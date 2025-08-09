import { createContext, useContext } from "react";
export const ThemeContext = createContext(undefined);
const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useThemeContext must be defined within a ThemeProvider");
    }
    return context;
};
export default useThemeContext;
