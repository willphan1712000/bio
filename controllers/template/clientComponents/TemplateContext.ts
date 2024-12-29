export function username() {
    const url = window.location.href
    const searchParams = (new URL(url)).searchParams

    return searchParams.get('username')
}