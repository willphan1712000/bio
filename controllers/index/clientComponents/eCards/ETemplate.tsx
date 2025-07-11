import clientConfig from '../../clientConfig'
import Separator from '../Separator'
import Template from '../Template'
import Effect from './Effect'
import Slider from './Slider'
import eBusinessCards, { ProductType } from '../api/ecard'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'

const ETemplate = () => {
  const { isPending, data: products } = useQuery<ProductType[] | undefined>({
    queryKey: ['eBusinessCards'],
    queryFn: async () => await eBusinessCards.getEBusinessCards()
  })
  
  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden'>
      <p className='text-[20px] pb-5'>{clientConfig.templates.basic.heading}</p>
      <div id="basic_templates"></div>
      {isPending ? <BeatLoader /> : <Slider products={products}/>}

      <Separator thickness='4'/>

      <p className='text-[25px] pb-5'>{clientConfig.templates.pro.heading}</p>
      <div id="pro_templates"></div>
      {isPending ? <BeatLoader /> : <Effect products={products}/>}
      
      <div className='p-10'>
        <Template content="Explore More Template" />
      </div>
    </div>
  )
}

export default ETemplate
