export default function dateFormat(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
}
