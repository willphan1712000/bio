import React, { ChangeEvent, useState } from 'react'

interface Props {
    inputMode: 'text' | 'numeric',
    inputName: string,
    inputLabel: string,
    data?: string
}

const Input = ({inputMode, inputName, inputLabel, data}: Props) => {
  const [value, setValue] = useState(data)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className='relative w-full h-[32px]'>
      <input defaultValue={value} onChange={handleChange} required type="text" inputMode={inputMode} autoComplete='on' name={inputName} id={inputName} className='peer absolute rounded-[10px] border-black border-[1px] p-[5px] text-[15px] w-full h-auto z-50 bg-transparent'/>
      <div className={`label absolute top-0 left-0 py-0 px-[5px] m-[5px] text-[14px] text-black transition-all peer-focus:top-[-25px] peer-focus:left-[10px] peer-focus:z-50 peer-valid:top-[-25px] peer-valid:left-[10px] peer-valid:z-50`}>{inputLabel}</div>
    </div>
  )
}

export default Input
