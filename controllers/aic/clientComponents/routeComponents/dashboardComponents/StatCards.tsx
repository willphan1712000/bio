import { FaRegUser } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { SiMoneygram } from "react-icons/si";
import { DotLoader } from "react-spinners";
import apiDashboard from '../../api/dashboard';
import StatCard from './StatCard';
import useAppEffect from "../../../../client/hooks/useAppEffect";
import useAppQuery from "../../../../client/hooks/useAppQuery";

const StatCards = () => {
  const { isPending, data: analyticsInfo, error } = useAppQuery('analytics', apiDashboard.analytics)
  useAppEffect(error)

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
