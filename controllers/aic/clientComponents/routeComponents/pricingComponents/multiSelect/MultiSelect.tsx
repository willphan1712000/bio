import { FaPlus } from "react-icons/fa";
import SelectRow from './SelectRow'
import usePricingContext from "../context";

const MultiSelect = () => {
  const { state, setState } = usePricingContext()
  if(!state || !setState) return

  const handleClick = () => {
    setState(prev => {
      if(!prev) return prev

      const newPrev = [...prev]
      newPrev.push({
        price: '',
        discount: '',
        period: '',
        isRecurring: true
      })

      return newPrev
    })
  }

  return (
    <div className='bg-white p-5 rounded-[30px] md:w-[700px] md:min-w-[700px] w-full'>
      <div className="flex flex-col">
        { state.map((_, id) => (
            <SelectRow key={id} id={id}/>
        ))}
      </div>

      <div className="w-full rounded-[15px] h-[35px] border-black border-dashed border-[2px] flex flex-row justify-center items-center cursor-pointer" title="add a pricing model" onClick={handleClick}>
        <FaPlus color="black" size="20"/>
      </div>
    </div>
  )
}

export default MultiSelect
