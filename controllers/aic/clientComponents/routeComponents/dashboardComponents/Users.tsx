import { Flex, Table } from '@radix-ui/themes';
import toast, { Toaster } from 'react-hot-toast';
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
    const { isPending, data: users, error } = useAppQuery('users', apiUsers.getUsers)
    const { mutateAsync: deleteTemplate } = useAppMutation('users', apiUsers.deleteUser)
    useAppEffect(error)

    const handleDeleteUser = async (username: string) => {
        const res = await deleteTemplate(username)
        if(!res) {
            toast(
                <AppToaster message='Delete unsuccessfully' />
            )
        } else {
            toast(
                <AppToaster message='Delete successfully' status={true} />
            )
        }
    }

    if(isPending) return <DotLoader />

    return (
        <Flex py="9" height="fit-content" direction="column">
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Token</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Delete Token</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Terminate user</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {users?.map(user => (
                        <Table.Row key={user.username}>
                            <Table.RowHeaderCell><a href={`/${user.username}`} target='__blank'>{user.username}</a></Table.RowHeaderCell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.token}</Table.Cell>
                            <Table.Cell>{user.deleteToken}</Table.Cell>
                            <Table.Cell>{dateFormat(user.createdAt)}</Table.Cell>
                            <Table.Cell><AppAlertDialog 
                            buttonTitle='Terminate'
                            title={config.message.user.terminateTitle}
                            des={config.message.user.terminateMsg}
                            fn={() => handleDeleteUser(user.username)}
                        /></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Flex>
    )
}

export default Users
