import { createContext, useContext } from "react";
export const CollapseContext = createContext(undefined);
const useCollapseContext = () => {
    const context = useContext(CollapseContext);
    if (context === undefined) {
        throw new Error("useCollapseContext is undefined and must be used within CollapseContext.");
    }
    return context;
};
export default useCollapseContext;
