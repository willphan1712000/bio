import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { CollapseContext } from './context/collapse';
import useThemeContext from '../../../client/clientComponents/context/theme';
import config from '../config';
import Account from './Account';
import Tab from './Tab';
const SideBar = () => {
    const [isCollapse, setCollapse] = useState(false);
    const theme = useThemeContext();
    const className = `${theme.classes.border} ${isCollapse ? 'w-fit' : 'w-[270px] min-w-[270px]'} md:flex hidden sticky top-0 left-0 z-[99] h-[100vh] shadow-2xl rounded-xl flex-col justify-between bg-inherit`;
    const tabs = config.sideBarTabs;
    return (_jsx(_Fragment, { children: _jsxs(CollapseContext.Provider, { value: { isCollapse, setCollapse }, children: [_jsx("div", { className: 'bg-inherit flex md:hidden flex-row justify-center fixed top-0 w-full shadow-2xl z-[2]', children: Object.keys(tabs).map(tab => (_jsx(Tab, { to: tabs[tab].to, name: tabs[tab].name, icon: tabs[tab].icon }, tab))) }), _jsxs("div", { className: className, children: [_jsx(Account, {}), _jsx("div", { className: 'flex-1', children: Object.keys(tabs).map(tab => (_jsx(Tab, { to: tabs[tab].to, name: tabs[tab].name, icon: tabs[tab].icon }, tab))) }), _jsx("div", { title: 'Collapse Menu', children: _jsx(Tab, { name: config.collapse.name, icon: config.collapse.icon, onClick: () => setCollapse(prev => !prev) }) })] })] }) }));
};
export default SideBar;
