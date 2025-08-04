export default function dateFormat(dateString : string) : string {
    const date = new Date(dateString)
    return date.toLocaleString()
}