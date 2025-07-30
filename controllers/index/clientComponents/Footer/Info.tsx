import { useQuery } from '@tanstack/react-query'
import clientConfig from '../../clientConfig'
import apiCompanyInfo, { CompanyInfo } from '../api/companyInfo'
import { BeatLoader } from "react-spinners"

const Info = () => {
  const { isPending, data: companyInfo } = useQuery<CompanyInfo | undefined>({
    queryKey: ['companyInfo'],
    queryFn: async () => await apiCompanyInfo.get()
  })

  const allinclicksUrl = companyInfo?.url.split(" ")[0]

  if(isPending) return <BeatLoader />

  return (
    <div className='flex flex-[2] flex-col items-start text-white text-[16px]'>
        <p className='text-[20px]'>Contact Us</p>
        <p>Facetime: <a href={`facetime-audio:${companyInfo?.email}`}>{companyInfo?.phoneNumber}</a></p>
        <p>Email: <a href={`mailto:${companyInfo?.email}`}>{companyInfo?.email}</a></p>
        <p>Address: <a target="_blank" href={`https://google.com/maps?q=${companyInfo?.address}`}>{companyInfo?.address}</a></p>
        <p>Website: <a target="_blank" href={`${allinclicksUrl}`}>{allinclicksUrl}</a></p>
    </div>
  )
}

export default Info