import { Button } from '@radix-ui/themes'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Button> {
    title?: string
}

const Template = ({title = 'Click me', ...otherProps}: Props) => {
  return (
    <Button {...otherProps} onClick={() => window.location.href = '/@template'}>{title}</Button>
  )
}

export default Template
