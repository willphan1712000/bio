import { useQuery } from '@tanstack/react-query';
import clientConfig from '../../clientConfig'
import apiCompanyInfo, { CompanyInfo } from '../api/companyInfo'
import { BeatLoader } from 'react-spinners';

const Social = () => {
  const { isPending, data: companyInfo} = useQuery<CompanyInfo | undefined>({
    queryKey: ['companyInfo'],
    queryFn: async () => await apiCompanyInfo.get()
  })
  const style = 'border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center';
  const urlParts = companyInfo?.url.split(" ") as string[]
  
  if(isPending) return <BeatLoader />

  return (
    <div className='text-white flex flex-row justify-center items-center gap-5 text-[20px] py-[30px]'>
        <div title="Facebook"><a target="_blank" className={style} href={`${urlParts[1]}`}><i className="fa-brands fa-facebook"></i></a></div>
        <div title="Instagram"><a className={style} target="_blank" href={`${urlParts[2]}`}><i className="fa-brands fa-instagram"></i></a></div>
        <div title="Messenger"><a className={style} target="_blank" href={`${urlParts[3]}`}><i className="fa-brands fa-facebook-messenger"></i></a></div>
        <div title="Phone"><a className={style} href={`tel:${companyInfo?.phoneNumber}`}><i className="fa-solid fa-phone"></i></a></div>
        <div title="Facetime Audio"><a className={style} href={`facetime-audio:${companyInfo?.email}`}><i className="fa-brands fa-apple"></i></a></div>
    </div>
  )
}

export default Social