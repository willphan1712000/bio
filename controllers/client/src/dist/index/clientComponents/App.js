import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import Footer from "./Footer/Footer";
import Banner from "./Heading/Banner";
import NavBar from "./NavBar/NavBar";
import AppScrollTrigger from "./ScrollTrigger/AppScrollTrigger";
import Separator from "./Separator";
import Template from "./Template/Template";
import ETemplate from "./eCards/ETemplate";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60 * 5,
        },
    },
});
const persister = createAsyncStoragePersister({
    storage: window.localStorage
});
const App = () => {
    return (_jsx(PersistQueryClientProvider, { client: queryClient, persistOptions: { persister }, children: _jsxs("div", { className: "bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C] flex flex-col items-center px-[10px]", children: [_jsx(NavBar, {}), _jsx(Banner, {}), _jsx(Template, {}), _jsx(Separator, {}), _jsx(ETemplate, {}), _jsx(Separator, {}), _jsx(AppScrollTrigger, {}), _jsx(Separator, {}), _jsx(Footer, {})] }) }));
};
export default App;
