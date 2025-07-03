import { Button } from '@radix-ui/themes'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Button> {
    title?: string
}

const Signup = ({title = 'Click me', ...otherProps}: Props) => {
  return (
    <Button {...otherProps} onClick={() => window.location.href = '/@signup'}>{title}</Button>
  )
}

export default Signup
