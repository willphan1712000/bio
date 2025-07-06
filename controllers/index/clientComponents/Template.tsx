import { Button } from '@willphan1712000/w'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Button> {
    title?: string
}

const Template = ({...otherProps}: Props) => {
  return (
    <Button {...otherProps} onClick={() => window.location.href = '/@template'} type="gradient" />
  )
}

export default Template
