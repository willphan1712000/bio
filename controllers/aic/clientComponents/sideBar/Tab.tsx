import useCollapseContext from "./context/collapse";
import useThemeContext from "../../../client/clientComponents/context/theme";
import { Link } from "@tanstack/react-router";

interface Props {
    to?: string,
    name: string,
    icon: JSX.Element,
    onClick?: () => void
}


const Tab = ({ to, name, icon, onClick }: Props) => {
    const theme = useThemeContext()
    const { isCollapse } = useCollapseContext()

    const className = `${theme.classes.hover} ${theme.classes.text} !w-auto h-[50px] !flex items-center !flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer border-[1px] border-transparent`;
    const pClasses = `md:flex hidden`

    if(to)
      return (
          <Link to={to} className={className} onClick={onClick} activeProps={{
            className: theme.classes.border
          }}>
            {icon}
            { !isCollapse && <p className={pClasses}>{name}</p> }
          </Link>
      )

    return (
      <div className={className} onClick={onClick} >
        {icon}
        { !isCollapse && <p className={pClasses}>{name}</p> }
      </div>
    )
    
}

export default Tab
