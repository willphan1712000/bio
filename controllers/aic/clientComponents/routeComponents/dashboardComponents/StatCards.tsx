import { FaRegUser } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { SiMoneygram } from "react-icons/si";
import StatCard from './StatCard';
import { useQuery } from "@tanstack/react-query";
import apiDashboard from '../../api/dashboard';
import { DotLoader } from "react-spinners";
import AppToaster from "../../../../client/clientComponents/AppToaster";
import { useEffect } from "react";
import toast from "react-hot-toast";

const StatCards = () => {
  const { isPending, data: analyticsInfo, error } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => apiDashboard.analytics(),
    staleTime: 5 * 60 * 1000, // 5 minutes,
    retry: 1
  })

  useEffect(() => {
      if(error) {
          toast(
            <AppToaster message={error?.message || "Something went wrong"} />
          )
      }
  }, [error])

  if(isPending) return <DotLoader />

  return (
    <div className="flex flex-col items-center md:flex-row gap-5 py-10">
        <StatCard color='one' icon={ <FaRegUser size="30"/> } title="Total number of users" value={analyticsInfo?.numberOfUsers} />
        <StatCard color="two" icon={ <SiMoneygram size="30"/>} title="Pro templates" value={analyticsInfo?.numberOfTemplates}/>
        <StatCard color="five" icon={ <GrMoney size="30"/> } title="Total subscription" value={analyticsInfo?.numberOfSubscriptions}/>
    </div>
  )
}

export default StatCards
