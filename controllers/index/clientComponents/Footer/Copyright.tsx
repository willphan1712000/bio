import { useQuery } from "@tanstack/react-query"
import apiCompanyInfo, { CompanyInfo } from '../api/companyInfo'
import { BeatLoader } from "react-spinners"

const Copyright = () => {
  const { isPending, data: companyInfo} = useQuery<CompanyInfo | undefined>({
    queryKey: ['companyInfo'],
    queryFn: async () => await apiCompanyInfo.get()
  })
    const copyright = `© ${new Date().getFullYear()} Allinclicks. All rights reserved.`
    const allinclicksUrl = companyInfo?.url.split(" ")[0]
  return (
    <div className="relative flex flex-col justify-center items-center w-full text-white">
        <p>{copyright}</p>
        {isPending ? <BeatLoader /> : (
            <div className="flex flex-row gap-3">
                <a href={`${allinclicksUrl}/privacy`} target="">Privacy Policy</a>
                <span> | </span>
                <a href={`${allinclicksUrl}/terms`} target="">Terms of Use</a>
            </div>
        )}
    </div>
  )
}

export default Copyright
