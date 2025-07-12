import { ApiResponse } from "apisauce";
import apiClient from "./apiClient";

export type ServerProducts = {
    products: any[]
}

export type ProductType = {
    thumbnails: string,
    url: string
}

export type ClientProducts = {
    products?: ProductType[]
}

function get(): Promise<ApiResponse<ServerProducts>> {
    return apiClient.get<ServerProducts>('/api/woo/product')
}

function getAdapter(serverProducts: any[]): ClientProducts {
    const products = serverProducts.map(product => ({
        thumbnails: product.images[0].src,
        url: product.permalink
    }))

    return { products }
}

async function getEBusinessCards() {
    const res = await get()
    if(!res.ok) return
    const { products } = res.data!
    return getAdapter(products).products; // Returning ClientProducts directly
}

export default {
    getEBusinessCards
}