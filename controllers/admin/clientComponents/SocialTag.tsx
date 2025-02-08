import { handleAdminElementContext, handleAdminIconContext } from './AdminContext'
import CountryCode from './CountryCode/CountryCode'
import Input from './Input'

const SocialTag = () => {
  const name = handleAdminElementContext()
  const iconMap = handleAdminIconContext()

  return (
    <div className={`social ${name}`} >
        <div className="social__img info__img aspect-[1/2] flex justify-center items-center flex-col relative p-[10px]" dangerouslySetInnerHTML={{ __html: iconMap[name]! }}></div>
        <div className='social__tool flex items-center'><div className="social__tool--wrapper flex items-center relative h-auto">{['Mobile', 'Work', 'Viber', 'Whatsapp'].includes(name) && <CountryCode />}</div></div>
        <div className="social__info info__about flex flex-col justify-center my-0 mx-[10px] flex-grow-1 w-full">
            <Input inputLabelColor='#f6f2ff'/>
        </div>
    </div>
  )
}

export default SocialTag
