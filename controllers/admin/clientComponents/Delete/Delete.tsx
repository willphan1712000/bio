import { useReducer } from 'react'
import { AdminDeleteContext, DeleteAction, DeleteState, username } from '../AdminContext'
import DeleteButton from './DeleteButton'
import DeleteConfirm from './DeleteConfirm'
import reducer from './Reducer'

interface Props {
    message: {[key: string]: string}
}

const Delete = ({message}: Props) => {
    const [state, dispatch] = useReducer(reducer, {
        show: false,
        username: username(),
        message,
        isDeleting: false,
        msg: 'Deactivate Account',
        disabled: false
    })
  return (
    <AdminDeleteContext.Provider value={[state, dispatch]}>
        <DeleteButton />
        <DeleteConfirm />
    </AdminDeleteContext.Provider>
  )
}

export default Delete
