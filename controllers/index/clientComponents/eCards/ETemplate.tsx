import clientConfig from '../../clientConfig'
import Separator from '../Separator'
import Template from '../Template'
import Effect from './Effect'
import Slider from './Slider'

const basic_products = clientConfig.templates.basic.products
const pro_products = clientConfig.templates.pro.products

const ETemplate = () => {
  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center py-10 overflow-hidden'>
      <p className='text-[20px] pb-5'>Basic Templates</p>
      <div id="basic_templates"></div>
      <Slider products={basic_products}/>

      <Separator thickness='4'/>

      <p className='text-[25px] pb-5'>Pro Templates</p>
      <div id="pro_templates"></div>
      <Effect products={pro_products}/>
      
      <div className='p-10'>
        <Template content="Explore More Template" />
      </div>
    </div>
  )
}

export default ETemplate
