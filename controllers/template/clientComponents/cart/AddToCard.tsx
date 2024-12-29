import { useEffect } from 'react'
import handleCartContext from './CartContext'
import { auth } from '../../template'

const AddToCard = () => {
    const [state, dispatch] = handleCartContext()

    function handleClick(e: any) {
        auth(state.signin, () => {
            const current = $(e.currentTarget)
            const check = current.find(".check")
            const data = current.data("id")
            if(!check.hasClass("active")) {
                dispatch({type: 'add', value: data})
            } else {
                dispatch({type: 'remove', value: data})
            }
        })
    }

    useEffect(() => {
        Object.keys(state.items).map(item => {
            $(`.add[data-id="${item}"]`).find(".check").addClass("active")
        })
        // handle whenever user clicks on add to cart button, then trigger dispatch function
        $(".template-choice .add").click(e => handleClick(e))

        return () => {
            $(".template-choice .add").off("click", handleClick)
        }
    }, [])
    return null
}

export default AddToCard
