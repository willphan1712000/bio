import usePricingContext from "../context"
import { PricingModel } from '../context'

interface Props {
    title?: string,
    name: keyof PricingModel,
    id: number
}

const AppInput = ({ title = '', name, id }: Props) => {
  const { state, setState } = usePricingContext() ?? {};
  if(!state || !setState) return

  const value = state[id][name]

  if(typeof value === 'boolean') return

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setState(prev => {
      if (!prev) return prev;
      
      const newPrev = [...prev]
      newPrev[id] = {
        ...newPrev[id],
        [name]: value
      }

      return newPrev
    });
  }

  return (
    <div className='relative md:w-auto w-full flex-1'>
        <span className='absolute text-black top-[-15px] left-[10px] bg-white px-[5px]'>{title}</span>
        <input placeholder={`${name==='price' ? '0.00' : '0'}`} type="text" min="0" className='text-black focus:border-[1px] w-full' name={name} value={value} onChange={handleChange}/>
    </div>
  )
}

export default AppInput
