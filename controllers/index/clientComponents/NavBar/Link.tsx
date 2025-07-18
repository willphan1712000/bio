import { useQuery } from "@tanstack/react-query"
import apiCompanyInfo, { CompanyInfo } from '../api/companyInfo'
import { BeatLoader } from "react-spinners"

const Link = () => {
  const { isPending, data: companyInfo } = useQuery<CompanyInfo | undefined>({
    queryKey: ['companyInfo'],
    queryFn: async () => await apiCompanyInfo.get()
  })

  if(isPending) return <BeatLoader />
  
  return (
    <>
        <a href="/@template" className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Templates</a>
        <a href={`${companyInfo?.url.split(" ")[0]}/about-us`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">About us</a>
        <a href={`${companyInfo?.url.split(" ")[0]}/terms`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Terms & Privacy</a>
        <a href={`${companyInfo?.url.split(" ")[0]}/blog`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Blogs</a>
    </>
  )
}

export default Link
