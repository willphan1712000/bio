import { PropsWithChildren, ReactNode } from 'react'
import Input from '../../admin/clientComponents/Input'

interface Props {
    name: string,
    label: string,
    data?: string,
    children?: ReactNode
}

const SocialTag = ({name, label, data, children}: Props) => {
  return (
    <div className={`social ${name}`} >
        <div className="social__img info__img">{children}</div>
        <div className="social__info info__about">
            <Input inputLabel={label} inputMode={(name === 'Mobile' || name === 'Work') ? 'numeric': 'text'} inputName={name} data={data} />
        </div>
    </div>
  )
}

export default SocialTag
