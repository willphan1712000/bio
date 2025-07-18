import { TbLayoutDashboard } from "react-icons/tb";
import useThemeContext from "../../../../client/clientComponents/context/theme";

interface Props {
    selected?: boolean
}

const Dashboard = ({ selected = true }: Props) => {
    const theme = useThemeContext()

    const className = `${theme.classes.hover} ${theme.classes.text} flex flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all ${selected ? `${theme.classes.border}` : ''}`;

  return (
    <div className={className}>
      <TbLayoutDashboard size="25"/>
      <p>Dashboard</p>
    </div>
  )
}

export default Dashboard
