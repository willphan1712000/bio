import Lenis from "@studio-freight/lenis"

export default Object.freeze({
    nfc: {
        one: "Cards use short-range wireless technology to communicate with compatible devices when brought close together.",
        two: "These cards can store and transmit small amounts of data, such as contact info, website links, or payment credentials.",
        three: "NFC cards require no battery and are often used for digital business cards, access control, or contactless payments."
    }
})

export function smoothScrolling() {
    // smooth scroll
    const lenis = new Lenis()

    lenis.on('scroll', (e: any) => {
        console.log(e)
    })

    function ref(time: any) {
        lenis.raf(time)
        requestAnimationFrame(ref)
    }

    requestAnimationFrame(ref)
}