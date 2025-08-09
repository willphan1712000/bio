import apiClient, { Response } from "../../../client/api/apiClient";
import { PricingModel } from "../routeComponents/pricingComponents/context";

async function post(pricing?: PricingModel[]): Promise<boolean> {
    if(!pricing) throw new Error("Pricing is not defined")
    const res = await apiClient.post('/api/pricing', JSON.stringify(pricing))
    if(!res.ok) throw new Error(res.problem)
    const data = res.data as Response<Response<any>>
    if(!data.success) throw new Error(data.error)
    const data_sec = data.data
    if(!data_sec.success) throw new Error(data_sec.error)
    return data_sec.success
}

async function get(): Promise<PricingModel[]> {
    const res = await apiClient.get('/api/pricing')
    if(!res.ok) throw new Error(res.problem)
    const data = res.data as Response<Response<PricingModel[]>>
    if(!data.success) throw new Error(data.error)
    const data_sec = data.data
    if(!data_sec.success) throw new Error(data_sec.error)
    return data_sec.data
}

async function update(id: number): Promise<boolean> {
    const res = await apiClient.put('/api/pricing/' + id)
    if(!res.ok) throw new Error(res.problem)
    const data = res.data as Response<Response<any>>
    if(!data.success) throw new Error(data.error)
    const data_sec = data.data
    if(!data_sec.success) throw new Error(data_sec.error)
    return data_sec.success
}

export default {
    post,
    get,
    update
}