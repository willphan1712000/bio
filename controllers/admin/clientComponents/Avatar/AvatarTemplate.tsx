import ReactDOM from 'react-dom'
import Avatar from './Avatar'

const AvatarTemplate = () => {
  const container = document.getElementById("avatar__container") as HTMLElement

  return ReactDOM.createPortal(
    <div className="aspect-square flex justify-center items-center flex-col w-full absolute top-0 left-0 bg-white rounded-full" style={{height: "-webkit-fill-available"}}>
        <Avatar popup={document.getElementById("uploadImagePopup")!}/>
    </div>,
    container
  )
}

export default AvatarTemplate
