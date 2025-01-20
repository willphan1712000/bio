import Image from '../../../client/src/Web-Development/components/Image'
import { handleAdminImageContext } from '../AdminContext'

const AvatarImg = () => {
    const [state] = handleAdminImageContext()
  return (
    <div className="overflow-hidden rounded-[50%] aspect-square border-2 border-[#f0f0f0]">
        <Image src={state.mainSrc}/>
    </div>
  )
}

export default AvatarImg
