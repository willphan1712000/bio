import { FaRegUser } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { SiMoneygram } from "react-icons/si";
import StatCard from './StatCard';

const StatCards = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-5 py-10">
        <StatCard color='one' icon={ <FaRegUser size="25"/> } title="Total number of users" value="300k" />
        <StatCard color="two" icon={ <SiMoneygram size="25"/>} title="Pro templates"/>
        <StatCard color="five" icon={ <GrMoney size="25"/> } title="Total subscription" />
    </div>
  )
}

export default StatCards
