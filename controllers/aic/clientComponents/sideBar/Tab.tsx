import useCollapseContext from "./collapse";
import useThemeContext from "../../../client/clientComponents/context/theme";

interface Props {
    selected?: boolean,
    name: string,
    icon: JSX.Element,
    onClick?: () => void
}


const Tab = ({ selected = false, name, icon, onClick}: Props) => {
    const theme = useThemeContext()
    const { isCollapse } = useCollapseContext()

    const className = `${theme.classes.hover} ${theme.classes.text} ${isCollapse ? 'justify-center': ''} flex items-center flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all ${selected ? `${theme.classes.border}` : ''}`;

  return (
    <a className={className} onClick={onClick}>
      {icon}
      { !isCollapse && <p>{name}</p> }
    </a>
  )
}

export default Tab
