
import { ClipLoader } from 'react-spinners'
import Save from './Save'
import { useState } from 'react'

export default function SaveDefault() {
  const [isSubmitting, setSubmit] = useState<boolean>(false)
  const [isDone, setDone] = useState<boolean>(false)
  const [msg, setMsg] = useState<string>('Save')

  return (
    <div className='flex justify-center items-center sticky bottom-0 z-[99]'>
      <div className={`saveDefaultButtonStyle ${isDone ? 'saveDefaultButtonGlowingStyle': ''}`}>
          <span className="flex items-center"><p className='mx-[10px]'>{msg}</p> <ClipLoader size="20px" color='#000' loading={isSubmitting}/></span>
          <Save setSubmit={setSubmit} setDone={setDone} setMsg={setMsg}/>
      </div>
    </div>
  )
}

