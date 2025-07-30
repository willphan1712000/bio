
/**
 * This function returns a Promise that waits for a certain period of time
 * @param howLong how long we should wait (ms)
 * @returns a Promise of setTimeout for howLong
 */
const wait = (howLong: number) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(null)
        }, howLong)
    })
}

export default wait