export default function () {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        else {
            return 'light';
        }
    }
    else {
        return 'notSupported';
    }
}
