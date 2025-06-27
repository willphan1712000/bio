interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?: string
}

const TemplateButton = ({content = "Templates", ...otherProps}: Props) => {
  return (
    <button {...otherProps} className="TemplateButtonbtn"><div style={{backgroundColor: "#111723"}} className="TemplateButtonlabel"><p className="TemplateButtonp" style={{color: `$fff`}}>{content}</p></div></button>
  )
}

export default TemplateButton
