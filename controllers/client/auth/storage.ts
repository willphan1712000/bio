import { jwtDecode, JwtPayload } from "jwt-decode"

const key = "CRM-ctoken"

function setToken(token: string) {
    localStorage.setItem(key, token)
}

function getToken(): string | null {
    return localStorage.getItem(key)
}

function getUser(): JwtPayload | null {
    const token = getToken()
    return token ? jwtDecode(token) : null
}

function removeToken(): void {
    localStorage.removeItem(key);
}

export default {
    key,
    setToken,
    getToken,
    removeToken,
    getUser
}