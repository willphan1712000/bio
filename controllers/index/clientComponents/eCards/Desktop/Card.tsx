import { TiPlus } from "react-icons/ti";

const Card = () => {
  return (
    <div className='bg-[--apple] rounded-[40px] w-[300px] h-[400px] overflow-hidden relative'>
      <img src="/controllers/client/img/background.png" className='size-full object-cover' draggable="false" loading="lazy"/>
      <div className="absolute bottom-5 right-5 rounded-full bg-[--apple] size-[40px] flex justify-center items-center"><TiPlus size="20"/></div>
    </div>
  )
}

export default Card
