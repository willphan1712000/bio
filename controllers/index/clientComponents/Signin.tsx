import { Button } from '@willphan1712000/w'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Button> {
    title?: string
}

const Signin = ({...otherProps}: Props) => {
  return (
    <Button {...otherProps} onClick={() => window.location.href = '/@signin'} type="solid" />
  )
}

export default Signin
