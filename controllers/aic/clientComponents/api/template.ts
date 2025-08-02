import apiClient, { Response } from "../../../client/api/apiClient";

interface Files {
    thumbnail: File,
    template: File,
    annotation: File
}

type Template = {
    id: number,
    thumbnail: string,
    thumbnail_url: string,
    template: string,
    template_url: string,
    type: string,
    createdAt: string,
    unit_price: number,
    recurring_price: number,
    isActive: boolean
}

async function uploadTemplate(files: Files): Promise<Response<Response<any>>> {
    const formData = new FormData()
    formData.append('thumbnail', files.thumbnail)
    formData.append('template', files.template)
    formData.append('annotation', files.annotation)

    const res = await apiClient.post('/api/template/manage', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        } 
    })
    return res.data as Response<Response<any>>
}

async function getTemplateRecords(): Promise<Template[]> {
    const res = await apiClient.get('/api/template/manage')

    if(!res.ok) throw new Error(res.problem)

    const data = res.data as Response<Response<Template[]>>
    if(!data.success) throw new Error(data.error)

    const data_sec = data.data
    if(!data_sec.success) throw new Error(data_sec.error)

    return data_sec.data
}

async function getTemplateServerURL(): Promise<string> {
    const res = await apiClient.get('/api/template/manage/url')

    if(!res.ok) throw new Error(res.problem)

    const data = res.data as Response<string>
    if(!data.success) throw new Error(data.error)

    return data.data
}

async function updateTemplate(id: number): Promise<boolean> {
    const res = await apiClient.put('/api/template/manage/' + id)
    if(!res.ok) throw new Error(res.problem)

    const data = res.data as Response<Response<any>>
    if(!data.success) throw new Error(data.error)

    const data_sec = data.data
    if(!data_sec.success) throw new Error(data_sec.error)
    return data_sec.success
}

async function deleteTemplate(id: number): Promise<boolean> {
    const res = await apiClient.delete('/api/template/manage/' + id)
    if(!res.ok) throw new Error(res.problem)
    const data = res.data as Response<Response<any>>
    if(!data.success) throw new Error(data.error)

    const data_sec = data.data
    if(!data_sec.success) throw new Error(data_sec.error)
    return data_sec.success
}

export default {
    uploadTemplate,
    getTemplateRecords,
    getTemplateServerURL,
    updateTemplate,
    deleteTemplate
}