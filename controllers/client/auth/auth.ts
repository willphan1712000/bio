import apiClient, { Response } from "../api/apiClient";
import Cookies from 'js-cookie';
import authStorage from './storage'

// This link is a route that users will be redirected to whenever they logout or invalid login information found
const signInLink = '/@signin' 

async function validate(username: string): Promise<boolean> {
    const res = await apiClient.post('/api/auth/check', {
        username
    })

    if(!res.ok) throw new Error(res.problem)
    
    const data = res.data as Response<boolean>

    if(!data.success) throw new Error(data.error)

    const auth = data.data

    if(!auth) {
        window.location.href = signInLink
    }
    
    return auth
}

async function login(username: string, password: string, email: string): Promise<any> {
    const res = await apiClient.post('/api/auth', {
        username,
        password,
        email
    })

    if(!res.ok) throw new Error(res.problem)
    
    const data = res.data as Response<any>

    if(!data.success) throw new Error(data.error)

    return data.data
}

async function logout(): Promise<void> {
    // clear cookies
    Cookies.remove('PHPSESSID')
    // remove token
    authStorage.removeToken()
    // redirect to the login page
    window.location.href = signInLink
}

export default {
    validate,
    login,
    logout
}