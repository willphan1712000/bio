import { create } from 'apisauce'
import authStorage from '../auth/storage'

export type Response<DataType> = {
    success: boolean,
    data: DataType,
    error?: string
}

const apiClient = create({
    baseURL: '/'
})

apiClient.addAsyncRequestTransform(async (request) => {
    const token = authStorage.getToken()
    if(!token) return
    if(!request.headers) request.headers = {}
    request.headers['authorization-token'] = token
})

export default apiClient