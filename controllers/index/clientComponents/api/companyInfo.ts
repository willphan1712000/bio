import apiClient, { Response } from "./apiClient"

export type CompanyInfo = {
    "id": number,
    "name":string,
    "address": string,
    "phoneNumber": string,
    "email": string,
    "openingHours": string,
    "url": string,
    "createdAt": string,
    "updatedAt": string
    }

async function get(): Promise<CompanyInfo | undefined> {
    const res = await apiClient.get('/api/branches')
    if(!res.ok) return undefined
    const data = res.data as Response<CompanyInfo[]>
    return data.data[0] as CompanyInfo
}

export default {
    get
}