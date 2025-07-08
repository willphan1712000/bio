import Lenis from "@studio-freight/lenis"

export default Object.freeze({
    default_product: {
        thumbnails: "/controllers/client/img/unknown.png",
        url: "/"
    },
    nfc: {
        title: "Use NFC - Near Field Communication Technology",
        one: "Cards use short-range wireless technology to communicate with compatible devices when brought close together.",
        two: "These cards can store and transmit small amounts of data, such as contact info, website links, or payment credentials.",
        three: "NFC cards require no battery and are often used for digital business cards, access control, or contactless payments."
    },
    heading: {
        title: "Level Up Your eBusiness Cards",
        des1: "Create your profile and save it on an ",
        desSpan: "eBusiness Cards",
        des2: " Tap it on a phone to see how amazing your profile is",
        img: "/controllers/client/img/ip.png"
    },
    aic: {
        website: "https://allinclicks.com",
        email: "tonthang@icloud.com",
        phone: "571-419-0969",
        messenger: "https://m.me/AllinclicksUs",
        facebook: "https://www.facebook.com/AllinclicksUs/",
        instagram: "https://www.instagram.com/allinclicks.us",
        address: "800 Walnut Creek Dr NW, Lilburn, GA 30047"
    },
    templates: {
        basic: {
            heading: "Basic Templates",
            des: "Just create your profile, buy a template of your choice and we will ship your card to you.",
            products: [
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
            ]
        },
        pro: {
            heading: "Pro Templates",
            des: "Just create your profile, buy a pro template of your choice. You will have the pro template displayed on your profile + a card printed with the template shipped to you.",
            products: [
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/instagram_front.png",
                    url: "/"
                },
            ]
        },
        diamond: {
            heading: "",
            des: ""
        }
    },
    cards: {
        basic: {
            heading: "",
            des: "",
            products: [
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
            ]
        },
        professional: {
            heading: "",
            des: "",
            products: [
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
                {
                    thumbnails: "/controllers/client/img/background.png",
                    url: "/"
                },
            ]
        }
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