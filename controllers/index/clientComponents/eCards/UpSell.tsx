import clientConfig from '../../clientConfig'
import Slider from './Slider'

const pro_products = clientConfig.cards.professional

const UpSell = () => {
  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden'>
      <p className='text-[20px] pb-5'>Most Popular</p>
    </div>
  )
}

export default UpSell
