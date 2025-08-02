import { createRouter, RouterProvider } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ThemeContext, ThemeContextType } from '../../client/clientComponents/context/theme'
import detectLightMode from '../../client/utilities/detectLightMode'
import { routeTree } from './routes/routeTree.gen'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createRouter({ 
    routeTree,
    basepath: '/@aic'
 })
 declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
 }


const App = () => {
    const [theme, setTheme] = useState<ThemeContextType>({
        classes: {
            bg: '',
            border: '',
            hover: '',
            text: '',
            container: ''
        },
    })

    useEffect(() => {
        const currentTheme = detectLightMode()
        setTheme({
            classes: {
                bg: `system-${currentTheme}-bg`,
                border: `system-${currentTheme}-border`,
                hover: `system-${currentTheme}-hover`,
                text: `system-${currentTheme}-text`,
                container: `system-${currentTheme}-container`
            }
        })
    }, [])

    const queryClient = new QueryClient()

  return (
    <ThemeContext.Provider value={theme}>
        <QueryClientProvider client={queryClient}>
            <Theme accentColor="cyan" radius="full">
                <RouterProvider router={router} />
            </Theme>
        </QueryClientProvider>
    </ThemeContext.Provider>
  )
}

export default App
