import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'
import clientConfig from '../../clientConfig'
import eBusinessCards, { ProductType } from '../api/ecard'
import Separator from '../Separator'
import Effect from './Effect'
import Slider from './Slider'

const ECards = () => {
  const { isPending, data: products } = useQuery<ProductType[] | undefined>({
    queryKey: ['eBusinessCards'],
    queryFn: async () => await eBusinessCards.getEBusinessCards()
  })

  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden'>
      <div id="basic_cards"></div>
      <p className='text-[20px] pb-5'>{clientConfig.cards.basic.heading}</p>
      {isPending ? <BeatLoader /> : <Slider products={products}/>}

      <Separator thickness="4" />

      <div id="pro_cards"></div>
      <p className='text-[25px]'>{clientConfig.cards.professional.heading}</p>
      {isPending ? <BeatLoader /> : <Effect products={products}/>}
      
    </div>
  )
}

export default ECards
