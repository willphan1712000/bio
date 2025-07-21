import { Flex, Skeleton, Table } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import apiUsers from '../../api/users'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const notify = () => toast('Here is your toast.');

const Users = () => {
    const { isPending, data: users, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => apiUsers.getUsers(),
        staleTime: 5 * 60 * 1000, // 5 minutes,
        retry: 1
    })

    useEffect(() => {
        if(error) {
            toast(error.message)
        }
    }, [error])

  return (
    <Flex py="9" height="fit-content" direction="column">
        <Toaster />
        <Skeleton loading={isPending}>
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Password</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Token</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Delete Token</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {users?.map(user => (
                        <Table.Row key={user.username}>
                            <Table.RowHeaderCell>{user.username}</Table.RowHeaderCell>
                            <Table.Cell>{user.password}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.token}</Table.Cell>
                            <Table.Cell>{user.deleteToken}</Table.Cell>
                            <Table.Cell>{user.createdAt}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Skeleton>
    </Flex>
  )
}

export default Users
