import ReactDOM from 'react-dom'
import Avatar from './Avatar'

const AvatarTemplate = () => {
  const popop = document.getElementById("uploadImagePopup") as HTMLElement
  const avatarMounter = document.getElementById("avatar__container") as HTMLElement
  const containerWrapper = document.getElementById("avatar__container--wrapper") as HTMLElement

  return ReactDOM.createPortal(
    <Avatar popup={popop} avatarMounter={avatarMounter}/>,
    containerWrapper
  )
}

export default AvatarTemplate
