import CartCheckout from './CartCheckout'
import handleCartContext from './CartContext'
import CartItem from './CartItem'

const CartView = () => {
  const [state, dispatch] = handleCartContext()
  const items = state.items

  if(state.show)
    return (
      <div className='backdrop-blur-lg w-screen h-[100dvh] fixed top-0 left-0 p-4 flex flex-col justify-center items-center'>
        <div className='absolute top-[10px] right-[10px] px-3 py-2 text-xs font-medium text-center text-black bg-[#d4d4d4] rounded-lg cursor-pointer' onClick={() => {
          dispatch({type: 'show'})
          $("body").css({
            overflow: "auto"
          })
        }}>Go Back</div>
        {Object.keys(items).length !== 0 ? (<>
        <p className='text-center w-full p-5 text-[30px]'>Your Cart</p>
        <div className='flex flex-row gap-10 overflow-auto p-5 w-[38.95vh] h-[70vh] border-[2px] border-black rounded-[10px]'>
          {Object.keys(items).map(item => <CartItem key={item} item={item}/>)}
        </div>

        <div className='flex flex-row w-full justify-center items-center p-5'>
          <CartCheckout />
        </div></>) : <p className='text-[20px]'>Your cart is empty</p>}
      </div>
    )
}

export default CartView
