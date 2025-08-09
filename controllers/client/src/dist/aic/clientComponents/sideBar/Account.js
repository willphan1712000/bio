import { jsx as _jsx } from "react/jsx-runtime";
import useCollapseContext from './context/collapse';
import Logo from '../../../client/clientComponents/Logo';
const Account = () => {
    const { isCollapse } = useCollapseContext();
    const logoClasses = `flex w-[60%] p-5 flex-col gap-5`;
    return (_jsx("div", { className: 'w-full h-[80px]', children: _jsx("div", { className: logoClasses, children: !isCollapse && _jsx(Logo, {}) }) }));
};
export default Account;
