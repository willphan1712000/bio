"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const query_async_storage_persister_1 = require("@tanstack/query-async-storage-persister");
const react_query_1 = require("@tanstack/react-query");
const react_query_persist_client_1 = require("@tanstack/react-query-persist-client");
const Footer_1 = __importDefault(require("./Footer/Footer"));
const Banner_1 = __importDefault(require("./Heading/Banner"));
const NavBar_1 = __importDefault(require("./NavBar/NavBar"));
const AppScrollTrigger_1 = __importDefault(require("./ScrollTrigger/AppScrollTrigger"));
const Separator_1 = __importDefault(require("./Separator"));
const Template_1 = __importDefault(require("./Template/Template"));
const ETemplate_1 = __importDefault(require("./eCards/ETemplate"));
const queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60 * 5,
        },
    },
});
const persister = (0, query_async_storage_persister_1.createAsyncStoragePersister)({
    storage: window.localStorage
});
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_query_persist_client_1.PersistQueryClientProvider, { client: queryClient, persistOptions: { persister }, children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C] flex flex-col items-center px-[10px]", children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)(Banner_1.default, {}), (0, jsx_runtime_1.jsx)(Template_1.default, {}), (0, jsx_runtime_1.jsx)(Separator_1.default, {}), (0, jsx_runtime_1.jsx)(ETemplate_1.default, {}), (0, jsx_runtime_1.jsx)(Separator_1.default, {}), (0, jsx_runtime_1.jsx)(AppScrollTrigger_1.default, {}), (0, jsx_runtime_1.jsx)(Separator_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }) }));
};
exports.default = App;
