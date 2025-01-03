export function username() {
    const url = window.location.href
    const searchParams = (new URL(url)).searchParams

    return searchParams.get('username')
}

export function getQueryStr(queryName: string): string | null {
    const url = window.location.href
    const searchParams = (new URL(url)).searchParams

    return searchParams.get(queryName)
}

export function auth(isSignedIn: boolean, cb: () => void) {
    if(!isSignedIn) {
        window.location.href = '/@signin?template=true'
    } else {
        cb()
    }
}