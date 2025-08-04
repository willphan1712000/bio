import apiClient, { Response } from "../../../client/api/apiClient";

type AnalyticsInfo = {
    numberOfTemplates: number,
    numberOfSubscriptions: number,
    numberOfUsers: number
}

type SocialInfo = {
    name: string,
    value: number | string
}

async function analytics(): Promise<AnalyticsInfo> {
    const res = await apiClient.get('/api/analytics')
    if(!res.ok) throw new Error(res.problem || "Network Error")
    const data = res.data as Response<AnalyticsInfo>
    if(!data.success) throw new Error(data.error || "Network Error")
    return data.data
}

async function social(): Promise<SocialInfo[]> {
    const res = await apiClient.get('/api/analytics/social')
    if(!res.ok) throw new Error(res.problem || "Network Error")
    const data = res.data as Response<SocialInfo[]>
    if(!data.success) throw new Error(data.error || "Network Error")
    return data.data
}

export default {
    analytics,
    social
}