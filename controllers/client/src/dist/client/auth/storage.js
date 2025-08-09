import { jwtDecode } from "jwt-decode";
const key = "CRM-ctoken";
function setToken(token) {
    localStorage.setItem(key, token);
}
function getToken() {
    return localStorage.getItem(key);
}
function getUser() {
    const token = getToken();
    return token ? jwtDecode(token) : null;
}
function removeToken() {
    localStorage.removeItem(key);
}
export default {
    key,
    setToken,
    getToken,
    removeToken,
    getUser
};
