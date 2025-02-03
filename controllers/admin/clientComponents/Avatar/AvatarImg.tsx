import ReactDOM from 'react-dom'
import Image from '../../../client/src/Web-Development/components/Image'
import { handleAdminImageContext } from '../AdminContext'

const AvatarImg = () => {
    const [state] = handleAdminImageContext()

    if(!state.avatarMounter)
      return (
        <div className="overflow-hidden rounded-[50%] aspect-square border-2 border-[#f0f0f0]">
          <Image src={state.mainSrc}/>
        </div>
      )

    return ReactDOM.createPortal(
      <div className="absolute top-0 left-0 bg-white size-full">
        <Image src={state.mainSrc} objectFit='cover' />
      </div>
      , state.avatarMounter
  )
}

export default AvatarImg
