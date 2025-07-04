
import Effect from './Effect'
import Slider from './Slider'

const Desktop = () => {
  return (
    <div className='w-full rounded-[30px] bg-[--apple] max-w-[1500px] flex flex-col justify-center items-center p-10'>
      <Slider />
      <Effect />
    </div>
  )
}

export default Desktop
