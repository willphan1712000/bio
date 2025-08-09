import { createContext, useContext } from "react";
export const PricingContext = createContext(undefined);
const usePricingContext = () => {
    const context = useContext(PricingContext);
    if (context === undefined) {
        throw new Error("usePricingContext must be defined within a ThemeProvider");
    }
    return context;
};
export default usePricingContext;
