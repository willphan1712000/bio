import { useState } from 'react'
import { CollapseContext } from './context/collapse'
import useThemeContext from '../../../client/clientComponents/context/theme'
import config from '../config'
import Account from './Account'
import Tab from './Tab'

const SideBar = () => {
  const [isCollapse, setCollapse] = useState<boolean>(false)
  const theme = useThemeContext()

  const className = `${theme.classes.border} ${isCollapse ? 'w-fit' : 'w-[300px]'} h-full shadow-2xl rounded-xl flex flex-col justify-between`
  const tabs = config.sideBarTabs

  return (
    <CollapseContext.Provider value={{ isCollapse, setCollapse }}>
      <div className={className}>
        <Account />
        <div className='flex-1'>
          {(Object.keys(tabs) as (keyof typeof tabs)[]).map(tab => (
          <Tab 
            key={tab}
            to={tabs[tab].to}
            name={tabs[tab].name}
            icon={tabs[tab].icon}
          />
        ))}
        </div>
        <div>
          <Tab name={config.collapse.name} icon={config.collapse.icon} onClick={() => setCollapse(prev => !prev)}/>
        </div>
      </div>
    </CollapseContext.Provider>
  )
}


export default SideBar
