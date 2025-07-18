import useCollapseContext from "../../../client/clientComponents/context/collapse";
import useThemeContext from "../../../client/clientComponents/context/theme";

interface Props {
    selected?: boolean,
    name: string,
    icon: JSX.Element
}


const Tab = ({ selected = false, name, icon}: Props) => {
    const theme = useThemeContext()
    const { isCollapse } = useCollapseContext()

    const className = `${theme.classes.hover} ${theme.classes.text} flex items-center flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all ${selected ? `${theme.classes.border}` : ''}`;

  return (
    <a className={className} >
      {icon}
      { !isCollapse && <p>{name}</p> }
    </a>
  )
}

export default Tab
