import { useEffect, useState } from 'react'
import clientConfig from '../../clientConfig'
import Separator from '../Separator'
import Effect from './Effect'
import Slider from './Slider'
import { BeatLoader } from 'react-spinners'

const basic_products = clientConfig.cards.basic.products
const pro_products = clientConfig.cards.professional.products

const ECards = () => {
  const [sliderLoading, setSliderLoading] = useState<boolean>(false)
  const [effectLoading, setEffectLoading] = useState<boolean>(false)

  const fetchCards = async () => {
    
  }

  useEffect(() => {
    
  }, [])
  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden'>
      <div id="basic_cards"></div>
      <p className='text-[20px] pb-5'>{clientConfig.cards.basic.heading}</p>
      {sliderLoading ? <BeatLoader /> : <Slider products={basic_products}/>}

      <Separator thickness="4" />

      <div id="pro_cards"></div>
      <p className='text-[25px]'>{clientConfig.cards.professional.heading}</p>
      {effectLoading ? <BeatLoader /> : <Effect products={pro_products}/>}
      
    </div>
  )
}

export default ECards
