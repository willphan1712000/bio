type Mode = | 'light' | 'dark' | 'notSupported'

export default function(): Mode {
    // Check to see if Media-Queries are supported
    if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            // Dark
            return 'dark'
        } else {
            // Light
            return 'light'
        }
    } else {
        // Default (when Media-Queries are not supported)
        return 'notSupported'
    }
}