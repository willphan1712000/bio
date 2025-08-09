import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from 'react';
import { AdminDeleteContext, username } from '../AdminContext';
import DeleteButton from './DeleteButton';
import DeleteConfirm from './DeleteConfirm';
import reducer from './Reducer';
const Delete = ({ message }) => {
    const [state, dispatch] = useReducer(reducer, {
        show: false,
        username: username(),
        message,
        isDeleting: false,
        msg: 'Deactivate Account',
        disabled: false
    });
    return (_jsxs(AdminDeleteContext.Provider, { value: [state, dispatch], children: [_jsx(DeleteButton, {}), _jsx(DeleteConfirm, {})] }));
};
export default Delete;
