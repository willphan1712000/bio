import ReactDOM from 'react-dom'
import SaveTemplate from '../Save/SaveTemplate'

const Save = () => {
  return ReactDOM.createPortal(
    <SaveTemplate />,
    document.getElementById("save") as HTMLElement
  )
}

export default Save
