import clientConfig from '../../clientConfig'
import Separator from '../Separator'
import Effect from './Effect'
import Slider from './Slider'

const basic_products = clientConfig.cards.basic.products
const pro_products = clientConfig.cards.professional.products

const ECards = () => {
  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden'>
      <p className='text-[20px] pb-5'>Basic eBusiness Cards</p>
      <Slider products={basic_products}/>
      <Separator />
      <p className='text-[25px]'>Professional eBusiness Cards</p>
      <Effect products={pro_products}/>
    </div>
  )
}

export default ECards
