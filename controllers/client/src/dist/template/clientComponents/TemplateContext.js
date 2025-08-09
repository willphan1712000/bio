export function username() {
    const url = window.location.href;
    const searchParams = (new URL(url)).searchParams;
    return searchParams.get('username');
}
export function getQueryStr(queryName) {
    const url = window.location.href;
    const searchParams = (new URL(url)).searchParams;
    return searchParams.get(queryName);
}
export function auth(isSignedIn, cb) {
    if (!isSignedIn) {
        window.location.href = '/@signin?template=true';
    }
    else {
        cb();
    }
}
