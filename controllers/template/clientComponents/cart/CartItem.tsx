import handleCartContext from "./CartContext"

interface Props {
    item: string
}

const CartItem = ({item}: Props) => {
    const [,dispatch] = handleCartContext()

    const src = `controllers/template/${item}/${item}.png`

    function remove() {
        dispatch({type: 'remove', value: parseInt(item)})
    }
    return (
        <div className='w-full flex-shrink-0 relative'>
            <div className="rounded-[25px] border-black border-[2px] overflow-hidden">
                <img src={src} className='w-full h-full object-contain'/>
            </div>
            <div onClick={() => remove()} className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm text-center me-2 mb-2 absolute top-[-10px] left-[-10px] text-[10px] p-[8px] cursor-pointer'>remove</div>
        </div>
    )
}

export default CartItem
