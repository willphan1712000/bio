import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { $$$ } from '../../client/src/Web-Development/WW'
import handleAdminContext, { handleAdminElementContext, handleAdminLabelContext, handleAdminRegexContext } from './AdminContext'

interface Props {
    inputLabelColor: string,
    name?: string
}

const Input = ({inputLabelColor, name}: Props) => {
  const data = handleAdminContext()
  const regexMap = handleAdminRegexContext()
  const nameContext = handleAdminElementContext()
  const labelMap = handleAdminLabelContext()
  
  if(name === undefined) {
    name = nameContext as string
  }

  const [value, setValue] = useState<string>(data[name]!)

  const inputRef = useRef<HTMLInputElement>(null)
  const spanRef = useRef<HTMLElement>(null)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueFormatted = e.target.value
    setValue(valueFormatted)
    data[name] = valueFormatted
  }

  useEffect(() => {
    const validate = $$$(inputRef.current, spanRef.current, new RegExp(regexMap[name]!.slice(1, -1))).formValidate()

    return () => {
      validate.cleanup()
    }
  }, [])

  return (
    <div className='relative w-full h-[32px]'>
      <input ref={inputRef} value={value === null ? '': value} onChange={handleChange} required type="text" inputMode={['Mobile', 'Work', 'Zalo', 'Viber', 'HotLine'].includes(name) ? 'numeric' : 'text'} autoComplete='on' name={name} id={name} className='peer absolute rounded-[10px] border-black border-[1px] p-[5px] text-[15px] w-full h-auto z-[1] bg-transparent'/>
      <div style={{background: inputLabelColor}} className={`label z-[0] absolute top-0 left-0 py-0 px-[5px] m-[5px] text-[15px] text-black transition-all peer-focus:top-[-15px] peer-focus:left-[10px] peer-focus:z-[1] peer-focus:text-[13px] peer-valid:top-[-15px] peer-valid:left-[10px] peer-valid:z-[1] peer-valid:text-[13px]`}>{labelMap[name]} <span ref={spanRef} className='ml-[5px]'></span></div>
    </div>
  )
}

export default Input
