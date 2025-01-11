import handleAdminContext, { handleAdminElementContext } from '../../admin/clientComponents/AdminContext'
import CountryCode from '../../admin/clientComponents/CountryCode/CountryCode'
import { iconMap } from '../../admin/clientComponents/ElementMap'
import Input from '../../admin/clientComponents/Input'

const SocialTag = () => {
  const name = handleAdminElementContext()
  const data = handleAdminContext()

  if(data === undefined) {
    throw new Error("Fetching data failed")
  }

  return (
    <div className={`social ${name}`} >
        <div className="social__img info__img">{iconMap[name]}</div>
        <div className='social__tool flex items-center'><div className="social__tool--wrapper flex items-center relative h-auto">{['Mobile', 'Work', 'Viber', 'Whatsapp'].includes(name) && <CountryCode />}</div></div>
        <div className="social__info info__about">
            <Input inputLabelColor='#f6f2ff'/>
        </div>
    </div>
  )
}

export default SocialTag
