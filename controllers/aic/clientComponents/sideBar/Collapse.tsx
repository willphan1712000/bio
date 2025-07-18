import useCollapseContext from "../../../client/clientComponents/context/collapse";
import useThemeContext from "../../../client/clientComponents/context/theme";
import { CiLogout } from "react-icons/ci";


const Collapse = () => {
    const theme = useThemeContext()
    const { isCollapse, setCollapse } = useCollapseContext()
    const handleCollapse = () => {
      setCollapse((prev: boolean) => !prev);
    };

    const className = `${theme.classes.hover} ${theme.classes.text} flex items-center flex-row gap-2 m-5 p-3 rounded-xl cursor-pointer transition-all`;

  return (
    <div className={className} onClick={handleCollapse}>
      <CiLogout size="20"/>
      {!isCollapse && <p>Collapse Menu</p>}
    </div>
  )
}

export default Collapse
