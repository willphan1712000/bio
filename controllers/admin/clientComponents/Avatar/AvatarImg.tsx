import { handleAdminImageContext } from '../AdminContext'

const AvatarImg = () => {
    const [state] = handleAdminImageContext()
  return (
    <div className="info__img--location overflow-hidden rounded-[50%] aspect-square border-2 border-[#f0f0f0]">
        <img draggable={false} src={state.mainSrc} alt="avatar_admin" />
    </div>
  )
}

export default AvatarImg
