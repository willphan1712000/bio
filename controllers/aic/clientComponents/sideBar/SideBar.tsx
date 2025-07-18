import { useState } from 'react'
import { CollapseContext } from '../../../client/clientComponents/context/collapse'
import useThemeContext from '../../../client/clientComponents/context/theme'
import config from '../config'
import Account from './Account'
import Collapse from './Collapse'
import Tab from './Tab'

const SideBar = () => {
  const [isCollapse, setCollapse] = useState<boolean>(false)
  const theme = useThemeContext()

  const className = `${theme.classes.border} ${isCollapse ? 'w-[100px]' : 'w-[300px]'} h-[100vh] shadow-2xl rounded-xl flex flex-col justify-between`

  return (
    <CollapseContext.Provider value={{ isCollapse, setCollapse }}>
      <div className={className}>
        <Account />
        <div className='flex-1'>
          {(Object.keys(config.sideBarTabs) as (keyof typeof config.sideBarTabs)[]).map(tab => (
          <Tab 
            key={tab}
            name={config.sideBarTabs[tab].name}
            icon={config.sideBarTabs[tab].icon}
          />
        ))}
        </div>
        <div>
          <Collapse />
        </div>
      </div>
    </CollapseContext.Provider>
  )
}


export default SideBar
