import { useReducer } from 'react'
import CartButton from './CartButton'
import { CartContext } from './CartContext'
import CartView from './CartView'
import reducer from './Reducer'
import AddToCard from './AddToCard'
import { username } from '../TemplateContext'

const items = JSON.parse(localStorage.getItem(username()!)!)

const Cart = ({signin} : {signin: string}) => {
    const [state, dispatch] = useReducer(reducer, {
        signin: signin === 'true',
        show: false,
        items: items ?? {}
    })
  return (
    <CartContext.Provider value={[state, dispatch]}>
        <AddToCard />
        <CartButton />
        <CartView />
    </CartContext.Provider>
  )
}

export default Cart
