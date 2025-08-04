import apiClient, { Response } from "../../../client/api/apiClient";

export type UserType = {
    username: string,
    password: string,
    email: string,
    token?: string,
    deleteToken?: string,
    createdAt: string
}

async function getUsers() {
    const res = await apiClient.post('/data/api/user/GETALL.php', {
        username: "Allinclicks",
        limit: 50
    })

    if(!res.ok) throw new Error(res.problem)
    const data = res.data as Response<UserType[]>
    if(!data.success) throw new Error(data.error)
    return data.data as UserType[]
}

async function deleteUser(username: string) {
    const res = await apiClient.post('/data/api/user/DELETE.php', {
        username,
        key: process.env.SYSTEM_SECRET_KEY
    })

    if(!res.ok) throw new Error(res.problem)
    const data = res.data as Response<undefined>
    if(!data.success) throw new Error(data.error)
    return data.success
}

export default {
    getUsers,
    deleteUser
}