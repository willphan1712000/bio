import { createContext, useContext } from "react";
export const CartContext = createContext(undefined);
export default function handleCartContext() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("Cart context is undefined");
    }
    return context;
}
