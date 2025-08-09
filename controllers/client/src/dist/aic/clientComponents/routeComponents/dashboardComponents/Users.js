var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Table } from '@radix-ui/themes';
import toast from 'react-hot-toast';
import { DotLoader } from 'react-spinners';
import AppAlertDialog from '../../../../client/clientComponents/AppAlertDialog';
import dateFormat from '../../../../client/utilities/timeFormat';
import apiUsers from '../../api/users';
import config from '../../config';
import AppToaster from '../../../../client/clientComponents/AppToaster';
import useAppEffect from '../../../../client/hooks/useAppEffect';
import useAppMutation from '../../../../client/hooks/useAppMutation';
import useAppQuery from '../../../../client/hooks/useAppQuery';
const Users = () => {
    const { isPending, data: users, error } = useAppQuery('users', apiUsers.getUsers);
    const { mutateAsync: deleteTemplate } = useAppMutation('users', apiUsers.deleteUser);
    useAppEffect(error);
    const handleDeleteUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield deleteTemplate(username);
        if (!res) {
            toast(_jsx(AppToaster, { message: 'Delete unsuccessfully' }));
        }
        else {
            toast(_jsx(AppToaster, { message: 'Delete successfully', status: true }));
        }
    });
    if (isPending)
        return _jsx(DotLoader, {});
    return (_jsx(Flex, { py: "9", height: "fit-content", direction: "column", children: _jsxs(Table.Root, { variant: 'surface', children: [_jsx(Table.Header, { children: _jsxs(Table.Row, { children: [_jsx(Table.ColumnHeaderCell, { children: "Username" }), _jsx(Table.ColumnHeaderCell, { children: "Email" }), _jsx(Table.ColumnHeaderCell, { children: "Token" }), _jsx(Table.ColumnHeaderCell, { children: "Delete Token" }), _jsx(Table.ColumnHeaderCell, { children: "Created at" }), _jsx(Table.ColumnHeaderCell, { children: "Terminate user" })] }) }), _jsx(Table.Body, { children: users === null || users === void 0 ? void 0 : users.map(user => (_jsxs(Table.Row, { children: [_jsx(Table.RowHeaderCell, { children: _jsx("a", { href: `/${user.username}`, target: '__blank', children: user.username }) }), _jsx(Table.Cell, { children: user.email }), _jsx(Table.Cell, { children: user.token }), _jsx(Table.Cell, { children: user.deleteToken }), _jsx(Table.Cell, { children: dateFormat(user.createdAt) }), _jsx(Table.Cell, { children: _jsx(AppAlertDialog, { buttonTitle: 'Terminate', title: config.message.user.terminateTitle, des: config.message.user.terminateMsg, fn: () => handleDeleteUser(user.username) }) })] }, user.username))) })] }) }));
};
export default Users;
