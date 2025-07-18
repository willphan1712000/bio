import { ComponentProps } from "react"

interface Props extends ComponentProps<"img"> {
    title? :string
}

const AppImage = ({...otherProps}: Props) => {
  return (
    <img {...otherProps} loading='lazy' draggable="false" alt="will-img-component"/>
  )
}

export default AppImage
