import { IoIosCloseCircle } from "react-icons/io";
import AppInput from "./AppInput";
import usePricingContext from "../context";

interface Props {
    id: number
}

const SelectRow = ({ id }: Props) => {
    const { state, setState } = usePricingContext()
    if(!state || !setState) return

    const handleClick = () => {
            setState(prev => {
            if(!prev) return prev

            const newPrev = prev.filter((_, i) => i !== id)

            return newPrev
        })
    }
    
    return (
        <div className='flex flex-col md:flex-row gap-6 relative w-full items-center my-[10px]'>
            <AppInput 
                title="Price ($)"
                name="price"
                id={id}
            />
            <AppInput 
                title="Discount (%)"
                name="discount"
                id={id}
            />
            <AppInput 
                title="Period (Month)"
                name="period"
                id={id}
            />
            <div className="cursor-pointer border-[2px] border-transparent hover:border-[red] rounded-full z-10 transition-all" title="delete row" onClick={handleClick} >
                <IoIosCloseCircle color="black" size="30"/>
            </div>
        </div>
    )
}

export default SelectRow
