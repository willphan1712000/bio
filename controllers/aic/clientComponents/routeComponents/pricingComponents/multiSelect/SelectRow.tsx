import { Switch } from "@radix-ui/themes";
import { IoIosCloseCircle } from "react-icons/io";
import usePricingContext from "../context";
import AppInput from "./AppInput";

interface Props {
    id: number
}

const SelectRow = ({ id }: Props) => {
    const { state, setState } = usePricingContext()
    if(!state || !setState) return

    const isChecked = state[id].isRecurring

    const handleRemove = () => {
            setState(prev => {
            if(!prev) return prev

            const newPrev = prev.filter((_, i) => i !== id)

            return newPrev
        })
    }

    const handleSwitch = async () => {
        setState(prev => {
            if(!prev) return prev

            const isRecurring = prev[id].isRecurring

            const newPrev = [...prev]
            newPrev[id] = {
                ...newPrev[id],
                isRecurring: !isRecurring
            }

            return newPrev
        })
    }
    
    return (
        <div className='flex flex-col md:flex-row gap-6 relative w-full items-center my-[10px]'>
            <div className="relative w-fit text-black">
               <p>{id + 1}</p>
            </div>
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
            <div className="relative flex-1 w-full">
                <span className="absolute top-[-22px] left-0">Is Recurring?</span>
                <Switch size="3" defaultChecked={isChecked} onClick={() => handleSwitch()}/>
            </div>
            <div className="cursor-pointer border-[2px] border-transparent hover:border-[red] rounded-full z-10 transition-all" title="delete row" onClick={handleRemove} >
                <IoIosCloseCircle color="black" size="30"/>
            </div>
        </div>
    )
}

export default SelectRow
