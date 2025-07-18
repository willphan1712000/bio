import React from 'react'
import Account from './Account'
import Dashboard from './content/Dashboard'
import useThemeContext from '../../../client/clientComponents/context/theme'

const SideBar = () => {
    const theme = useThemeContext()

    const className = `${theme.classes.border} w-[300px] h-[100vh] shadow-2xl rounded-xl`
  return (
    <div className={className}>
      <Account />
      <Dashboard />
    </div>
  )
}

export default SideBar
