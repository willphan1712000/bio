"use strict";
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
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_spinners_1 = require("react-spinners");
const AppAlertDialog_1 = __importDefault(require("../../../../client/clientComponents/AppAlertDialog"));
const timeFormat_1 = __importDefault(require("../../../../client/utilities/timeFormat"));
const users_1 = __importDefault(require("../../api/users"));
const config_1 = __importDefault(require("../../config"));
const AppToaster_1 = __importDefault(require("../../../../client/clientComponents/AppToaster"));
const useAppEffect_1 = __importDefault(require("../../../../client/hooks/useAppEffect"));
const useAppMutation_1 = __importDefault(require("../../../../client/hooks/useAppMutation"));
const useAppQuery_1 = __importDefault(require("../../../../client/hooks/useAppQuery"));
const Users = () => {
    const { isPending, data: users, error } = (0, useAppQuery_1.default)('users', users_1.default.getUsers);
    const { mutateAsync: deleteTemplate } = (0, useAppMutation_1.default)('users', users_1.default.deleteUser);
    (0, useAppEffect_1.default)(error);
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
    return ((0, jsx_runtime_1.jsx)(themes_1.Flex, { py: "9", height: "fit-content", direction: "column", children: (0, jsx_runtime_1.jsxs)(themes_1.Table.Root, { variant: 'surface', children: [(0, jsx_runtime_1.jsx)(themes_1.Table.Header, { children: (0, jsx_runtime_1.jsxs)(themes_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Username" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Email" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Token" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Delete Token" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Created at" }), (0, jsx_runtime_1.jsx)(themes_1.Table.ColumnHeaderCell, { children: "Terminate user" })] }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Body, { children: users === null || users === void 0 ? void 0 : users.map(user => ((0, jsx_runtime_1.jsxs)(themes_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(themes_1.Table.RowHeaderCell, { children: (0, jsx_runtime_1.jsx)("a", { href: `/${user.username}`, target: '__blank', children: user.username }) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: user.email }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: user.token }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: user.deleteToken }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, timeFormat_1.default)(user.createdAt) }), (0, jsx_runtime_1.jsx)(themes_1.Table.Cell, { children: (0, jsx_runtime_1.jsx)(AppAlertDialog_1.default, { buttonTitle: 'Terminate', title: config_1.default.message.user.terminateTitle, des: config_1.default.message.user.terminateMsg, fn: () => handleDeleteUser(user.username) }) })] }, user.username))) })] }) }));
};
exports.default = Users;
