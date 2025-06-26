import Lenis from "@studio-freight/lenis"

export default Object.freeze({
    nfc: {
        title: "Use NFC - Near Field Communication Technology",
        one: "Cards use short-range wireless technology to communicate with compatible devices when brought close together.",
        two: "These cards can store and transmit small amounts of data, such as contact info, website links, or payment credentials.",
        three: "NFC cards require no battery and are often used for digital business cards, access control, or contactless payments."
    },
    heading: {
        title: "Level up your",
        titleSpan: "eBusiness Cards",
        description: "Our eBusiness cards template will give you the best design so you can make a good impression towards your clients, increase your revenue based on your professionals."
    }
})

export function smoothScrolling() {
    // smooth scroll
    const lenis = new Lenis()
    
    function ref(time: any) {
        lenis.raf(time)
        requestAnimationFrame(ref)
    }

    requestAnimationFrame(ref)
}