import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface Props {
    status?: boolean,
    message?: string
}

const AppToaster = ({ status = false, message = '' }: Props) => {
  if(typeof message !== 'string') {
    console.log(message)
    message = 'Error...'
  }
  return (
    <div className='flex flex-row items-center gap-2'>
        {status ? <FaCheckCircle color='green' size="25"/> : <IoMdCloseCircle color='red' size="25"/>}
        {message}
    </div>
  )
}

export default AppToaster
