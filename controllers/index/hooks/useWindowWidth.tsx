import { useEffect, useState } from "react";

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    return windowWidth
}

export const mobile = 640