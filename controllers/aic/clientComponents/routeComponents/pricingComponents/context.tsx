import { createContext, useContext } from "react";

export type PricingModel = {
    price: number,
    discount: number,
    period: number
}

export type PricingModelContextType = {
    state?: PricingModel[],
    setState?: React.Dispatch<React.SetStateAction<PricingModel[] | undefined>>
}

export const PricingContext = createContext<PricingModelContextType | undefined>(undefined)

const usePricingContext = () => {
    const context = useContext(PricingContext)
    if(context === undefined) {
        throw new Error("usePricingContext must be defined within a ThemeProvider")
    }
    return context
}

export default usePricingContext