import React, { useEffect, useState } from 'react'
import SideBar from './sideBar/SideBar'
import { ThemeContext, ThemeContextType } from '../../client/clientComponents/context/theme'
import detectLightMode from '../../client/utilities/detectLightMode'

const App = () => {
    const [theme, setTheme] = useState<ThemeContextType>({
    classes: {
        bg: '',
        border: '',
        hover: '',
        text: '',
    },
})
    useEffect(() => {
        const currentTheme = detectLightMode()
        setTheme({
            classes: {
                bg: `system-${currentTheme}-bg`,
                border: `system-${currentTheme}-border`,
                hover: `system-${currentTheme}-hover`,
                text: `system-${currentTheme}-text`
            }
        })
    }, [])

  return (
    <ThemeContext.Provider value={theme}>
        <div className={theme?.classes.bg}>
            <SideBar />
        </div>
    </ThemeContext.Provider>
  )
}

export default App
