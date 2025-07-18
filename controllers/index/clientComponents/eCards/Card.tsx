import { TiPlus } from "react-icons/ti";
import clientConfig from "../../clientConfig";
import AppImage from "../../../client/clientComponents/AppImage";

interface Props {
  product?: {
    thumbnails: string,
    url: string
  }
}

const Card = ({ product = clientConfig.default_product }: Props) => {

  return (
    <a href={product.url} target="">
      <div className='bg-[--apple] rounded-[40px] w-[300px] h-[400px] overflow-hidden relative'>
        <AppImage src={product.thumbnails} className='size-full object-cover'/>
        <div className="absolute bottom-5 right-5 rounded-full bg-[--apple] size-[50px] flex justify-center items-center"><TiPlus size="20"/></div>
      </div>
    </a>
  )
}

export default Card
