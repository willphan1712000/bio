import iconMap, { labelMap } from '../../client/src/Icon'
import SocialTag from './SocialTag'

interface Props {
    socialArr: Array<string>
    data: any
}

const InfoArea = ({socialArr, data}: Props) => {
  return (
    <>
      {socialArr.map(social => !['username', 'name', 'image', 'organization', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode'].includes(social) && <SocialTag key={social} name={social} data={data[social]} label={labelMap[social]}>{iconMap[social]}</SocialTag>)}
    </>
  )
}

export default InfoArea
