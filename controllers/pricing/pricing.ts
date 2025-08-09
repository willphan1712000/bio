import apiClient, { Response } from "../client/api/apiClient"

$("document").ready(async function() {
    const container = document.getElementById('container') as HTMLElement
    if(!container) return
    const content = container.querySelector(".content") as HTMLElement
    if(!content) return

    content.innerHTML = 'Loading...'

    const res = await apiClient.get('/api/wp/pages/pricing')
    if(!res.ok) throw new Error(res.problem)

    const data = res.data as Response<string>
    if(!data.success) throw new Error(data.error)
    

    content.innerHTML = data.data
})