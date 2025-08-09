import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../../client/clientComponents/context/theme';
import detectLightMode from '../../client/utilities/detectLightMode';
import { routeTree } from './routes/routeTree.gen';
const router = createRouter({
    routeTree,
    basepath: '/@aic'
});
const App = () => {
    const [theme, setTheme] = useState({
        classes: {
            bg: '',
            border: '',
            hover: '',
            text: '',
            container: ''
        },
    });
    useEffect(() => {
        const currentTheme = detectLightMode();
        setTheme({
            classes: {
                bg: `system-${currentTheme}-bg`,
                border: `system-${currentTheme}-border`,
                hover: `system-${currentTheme}-hover`,
                text: `system-${currentTheme}-text`,
                container: `system-${currentTheme}-container`
            }
        });
    }, []);
    const queryClient = new QueryClient();
    return (_jsx(ThemeContext.Provider, { value: theme, children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(Theme, { accentColor: "cyan", radius: "full", children: _jsx(RouterProvider, { router: router }) }) }) }));
};
export default App;
