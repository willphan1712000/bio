interface Props {
    msg: string
}

const Toaster = ({msg}: Props) => {
  return (
    <div id="toaster">
      <div className="msg successMsg">
            <i className="fa-solid fa-check"></i>
            <p>Updated!</p>
        </div>
        <div className="msg errorMsg">
            <i className="fa-solid fa-x"></i>
            <p>Internal Error!</p>
        </div>
        <div className="msg notValidForm">
            <i className="fa-solid fa-x"></i>
            <p>{msg}</p>
        </div>
    </div>
  )
}

export default Toaster
