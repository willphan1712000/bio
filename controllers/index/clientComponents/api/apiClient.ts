import { create } from 'apisauce'

export type Response<DataType> = {
    success: boolean,
    data: DataType
}

const apiClient = create({
    baseURL: '/'
})

export default apiClient