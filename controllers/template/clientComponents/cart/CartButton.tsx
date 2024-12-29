import handleCartContext from './CartContext'

const CartButton = () => {
    const [state ,dispatch] = handleCartContext()
    const count = Object.keys(state.items).length

    function handleClick() {
      dispatch({type: 'show'})
      $("body").css({
          overflow: "hidden"
        })
  }
  return (
    <div className='relative'>
      <div onClick={() => handleClick()} className='btn-ele cart cursor-pointer'>
          <i className="fa-solid fa-cart-shopping"></i> Cart
      </div>
      <div className='absolute top-[-5px] left-[-5px] rounded-[50%] bg-[red] text-white w-[25px] h-[25px] flex justify-center items-center'>{count}</div>
    </div>
  )
}

export default CartButton
