import { createRouter, RouterProvider } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ThemeContext, ThemeContextType } from '../../client/clientComponents/context/theme'
import detectLightMode from '../../client/utilities/detectLightMode'
import { routeTree } from './routes/routeTree.gen'
import SideBar from './sideBar/SideBar'

// const router = createRouter({ 
//     routeTree,
//     basepath: '/@aic'
//  })
//  declare module "@tanstack/react-router" {
//     interface Register {
//         router: typeof router
//     }
//  }


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
            {/* <RouterProvider router={router} /> */}
        </div>
    </ThemeContext.Provider>
  )
}

export default App
