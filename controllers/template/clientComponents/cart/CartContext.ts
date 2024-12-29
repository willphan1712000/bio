import { createContext, useContext } from "react";

export type State = {
    signin: boolean
    show: boolean,
    items: {
        [key: number]: number
    }
}
export type Action = | {type: 'add', value: number} | {type : 'remove', value: number} | {type: 'show'}
export type Props = [state: State, action: React.Dispatch<Action>] | undefined

export const CartContext = createContext<Props>(undefined)

export default function handleCartContext() {
    const context = useContext(CartContext)
    if(context === undefined) {
        throw new Error("Cart context is undefined")
    }
    return context
}