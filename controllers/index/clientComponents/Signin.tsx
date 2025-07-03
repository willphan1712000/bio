import { Button } from '@radix-ui/themes'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Button> {
    title?: string
}

const Signin = ({title = 'Click me', ...otherProps}: Props) => {
  return (
    <Button {...otherProps} onClick={() => window.location.href = '/@signin'}>{title}</Button>
  )
}

export default Signin
