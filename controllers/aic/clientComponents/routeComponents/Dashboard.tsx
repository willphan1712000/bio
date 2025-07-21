import useThemeContext from "../../../client/clientComponents/context/theme"
import AppLineChart from "./dashboardComponents/AppLineChart"
import StatCards from "./dashboardComponents/StatCards"
import Users from "./dashboardComponents/Users"

const Dashboard = () => {
  const theme = useThemeContext()
  const headingClasses = `${theme.classes.text} text-[2rem] p-5`
  
  return (
    <div className="pt-[100px] px-5 w-full md:w-fit md:p-10">
      <h1 className={headingClasses}>Welcome to Link bio Dashboard</h1>
      <StatCards />
      <AppLineChart />
      <Users />
    </div>
  )
}

export default Dashboard
