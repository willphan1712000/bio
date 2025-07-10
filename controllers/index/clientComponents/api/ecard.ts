import apiClient from "./apiClient";

export default function fetch() {
    return apiClient.get('/api/woo/products/')
}