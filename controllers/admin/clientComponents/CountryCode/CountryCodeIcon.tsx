import { useContext } from "react"
import handleAdminContext, { handleAdminElementContext } from "../AdminContext"

interface Props {
  buttonRef: React.RefObject<HTMLDivElement>
  onCallBack: () => void
}

const CountryCodeIcon = ({buttonRef, onCallBack} : Props) => {
  const name = useContext(handleAdminElementContext())
  const data = useContext(handleAdminContext())

  let flag, code
  switch(name) {
    case 'Mobile':
      flag = data['MobileFlag'] ?? 'us'
      code = data['MobileCode'] ?? '+1'
      break
    case 'Work':
      flag = data['WorkFlag'] ?? 'us'
      code = data['WorkCode'] ?? '+1'
      break
    default:
      break
  }

  return (
    <div onClick={() => onCallBack()} className="countryCode p-[2px] flex flex-row rounded-[10px] bg-white h-auto mr-[5px] cursor-pointer" data-index data-flag data-code ref={buttonRef}>
        <div className="flag w-[40px] p-[5px] !flex items-center">
            <img draggable={false} className='w-full h-full' src={`/controllers/admin/clientComponents/CountryCode/flags/${flag.toLowerCase()}.png`}/>
        </div>
        <p className="code !flex items-center p-[2px]">{code}</p>
        <i className="fa-solid fa-caret-down !flex items-center p-[2px]"></i>
    </div>
  )
}

export default CountryCodeIcon