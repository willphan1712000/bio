import { useQuery } from "@tanstack/react-query"
import apiCompanyInfo, { CompanyInfo } from '../api/companyInfo'
import { BeatLoader } from "react-spinners"

const Copyright = () => {
  const { isPending, data: companyInfo} = useQuery<CompanyInfo | undefined>({
    queryKey: ['companyInfo'],
    queryFn: async () => await apiCompanyInfo.get()
  })
    const copyright = `© ${new Date().getFullYear()} Allinclicks. All rights reserved.`
  return (
    <div className="relative flex flex-col justify-center items-center w-full text-white">
        <p>{copyright}</p>
        {isPending ? <BeatLoader /> : (
            <div className="flex flex-row gap-3">
                <a href={`/@privacy`} target="">Privacy Policy</a>
                <span> | </span>
                <a href={`/@terms`} target="">Terms of Use</a>
                <span> | </span>
                <a href={`/@pricing`} target="">Pricing Policy</a>
            </div>
        )}
    </div>
  )
}

export default Copyright
