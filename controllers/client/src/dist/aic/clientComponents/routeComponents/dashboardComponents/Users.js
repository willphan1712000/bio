"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const themes_1 = require("@radix-ui/themes");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const react_hot_toast_1 = __importStar(require("react-hot-toast"));
const react_spinners_1 = require("react-spinners");
const AppAlertDialog_1 = __importDefault(require("../../../../client/clientComponents/AppAlertDialog"));
const AppToaster_1 = __importDefault(require("../../../../client/clientComponents/AppToaster"));
const timeFormat_1 = __importDefault(require("../../../../client/utilities/timeFormat"));
const users_1 = __importDefault(require("../../api/users"));
const config_1 = __importDefault(require("../../config"));
const Users = () => {
    const { isPending, data: users, error } = (0, react_query_1.useQuery)({
        queryKey: ['users'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return users_1.default.getUsers(); }),
        staleTime: 5 * 60 * 1000,
        retry: 1
    });
    (0, react_1.useEffect)(() => {
        if (error) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: error.message }));
        }
    }, [error]);
    const queryClient = (0, react_query_1.useQueryClient)();
    const { mutateAsync: deleteTemplate } = (0, react_query_1.useMutation)({
        mutationFn: users_1.default.deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        }
    });
    const handleDeleteUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield deleteTemplate(username);
        if (!res) {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: 'Delete unsuccessfully' }));
        }
        else {
            (0, react_hot_toast_1.default)((0, jsx_runtime_1.jsx)(AppToaster_1.default, { message: 'Delete successfully', status: true }));
        }
    });
    if (isPending)
        return (0, jsx_runtime_1.jsx)(react_spinners_1.DotLoader, {});
    return ((0, jsx_runtime_1.jsxs)(themes_1.Flex, { py: "9", height: "fit-content", direction: "column", children: [(0, jsx_runtime_1.jsx)(react_hot_toast_1.Toaster, {}), (0, jsx_runtime_1.jsxs)(themes_1.Table.Root, { variant: 'surface', children: [(0, jsx_runtime_1.jsx)(themes_1.Table.Header, { children: (0, jsx_runtime_1.jsxs)(themes_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Username" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Bio" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Email" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Token" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Delete Token" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Created at" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Terminate user" })] }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Body, { children: users === null || users === void 0 ? void 0 : users.map(user => ((0, jsx_runtime_1.jsxs)(themes_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(themes_1.Table.RowHeaderCell, { children: user.username }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, jsx_runtime_1.jsx)("a", { href: `/${user.username}`, target: '__blank', children: "Go to Bio" }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: user.email }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: user.token }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: user.deleteToken }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, timeFormat_1.default)(user.createdAt) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, jsx_runtime_1.jsx)(AppAlertDialog_1.default, { buttonTitle: 'Terminate', title: config_1.default.message.user.terminateTitle, des: config_1.default.message.user.terminateMsg, fn: () => handleDeleteUser(user.username) }) })] }, user.username))) })] })] }));
};
exports.default = Users;
