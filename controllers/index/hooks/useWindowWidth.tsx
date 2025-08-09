import { useEffect, useState } from "react";

/**
 * Function returns width value of the windows at real time
 * @returns windowWidth
 */
export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    return windowWidth
}

/**
 * Mobile logical width (px)
 */
export const mobile = 640