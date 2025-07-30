import useThemeContext from "../../../client/clientComponents/context/theme"
import AppLineChart from "./dashboardComponents/AppLineChart"
import StatCards from "./dashboardComponents/StatCards"
import Users from "./dashboardComponents/Users"
import Layout from "./Layout"

const Dashboard = () => {
  const theme = useThemeContext()
  const headingClasses = `${theme.classes.text} text-[2rem] p-5`
  
  return (
    <Layout heading="Welcome to Link bio Dashboard">
      <StatCards />
      <AppLineChart />
      <Users />
    </Layout>
  )
}

export default Dashboard
