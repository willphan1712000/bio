import { useEffect, useState } from 'react'
import { ThemeContext, ThemeContextType } from '../../client/clientComponents/context/theme'
import detectLightMode from '../../client/utilities/detectLightMode'
import SideBar from './sideBar/SideBar'

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
