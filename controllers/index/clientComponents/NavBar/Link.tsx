import { useQuery } from "@tanstack/react-query"
import apiCompanyInfo, { CompanyInfo } from '../api/companyInfo'
import { BeatLoader } from "react-spinners"

const Link = () => {
  return (
    <>
        <a href="/@template" className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Templates</a>
        <a href={`/@terms`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Terms</a>
        <a href={`/@privacy`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Privacy</a>
    </>
  )
}

export default Link
