import React from 'react'
import Slider from './Slider'
import Separator from '../Separator'

const UpSell = () => {
  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden'>
      <p className='text-[20px] pb-5'>Most Popular</p>
      <Slider />
    </div>
  )
}

export default UpSell
