import { faEnvelope, faGlobe, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../client/src/Web-Development/components/Image";

type Element = 'Email' | 'Mobile' | 'Work' | 'Booking' | 'OrderOnline' | 'HotSale' | 'Address' | 'Facebook' | 'Instagram' | 'Messenger' | 'Youtube' | 'Threads' | 'X' | 'Pinterest' | 'Linkedin' | 'Zalo' | 'Tiktok' | 'Website';
export default Element;

type ElementArray = Record<string, any>

const iconMap: ElementArray = {
    'Email': <Email />,
    'Mobile': <Mobile />,
    'Work': <Mobile />,
    'Booking': <Booking />,
    'OrderOnline': <OrderOnline />,
    'HotSale': <HotSale />,
    'Address': <Address />,
    'Facebook': <Facebook />,
    'Instagram': <Instagram />,
    'Messenger': <Messenger />,
    'Youtube': <Youtube />,
    'Threads': <Threads />,
    'X': <X />,
    'Pinterest': <Pinterest />,
    'Linkedin': <Linkedin />,
    'Zalo': <Zalo />,
    'Viber': <Viber />,
    'HotLine': <Mobile />,
    'Tiktok': <Tiktok />,
    'Website': <Website />,
    'Valid': <Valid />,
    'Invalid': <Invalid />
};

export { iconMap };

// const regexMap: ElementArray = {
//     'name': /^.*$/,
//     'organization': /^.*$/,
//     'description': /^.*$/,
//     'Email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     'Mobile': /^\d{10}$/,
//     'Work': /^\d{10}$/,
//     'Booking': /^(https:\/\/.*|[^]+)$/,
//     'OrderOnline': /^(https:\/\/.*|[^]+)$/,
//     'HotSale': /^(https:\/\/.*|[^]+)$/,
//     'Address': /^.*$/,
//     'Facebook': /^(https:\/\/.*|[^]+)$/,
//     'Instagram': /^(https:\/\/.*|[^]+)$/,
//     'Messenger': /^.*$/,
//     'Youtube': /^(https:\/\/.*|[^]+)$/,
//     'Threads': /^(https:\/\/.*|[^]+)$/,
//     'X': /^(https:\/\/.*|[^]+)$/,
//     'Pinterest': /^(https:\/\/.*|[^]+)$/,
//     'Linkedin': /^(https:\/\/.*|[^]+)$/,
//     'Zalo': /^\d{3}\d{3}\d{4}$/,
//     'Tiktok': /^(https:\/\/.*|[^]+)$/,
//     'Website': /^(https:\/\/.*|[^]+)$/,
// }

// export { regexMap };

const labelMap: ElementArray = {
    'name': 'Your Name',
    'organization': 'Organization or Job title',
    'description': 'A little about yourself',
    'Email': 'Your email',
    'Mobile': 'Mobile',
    'Work': 'Work',
    'Booking': 'Booking link',
    'OrderOnline': 'Order Online Link',
    'HotSale': 'HotSale link',
    'Address': 'Your Address',
    'Facebook': 'Facebook link',
    'Instagram': 'Instagram link',
    'Messenger': 'Facebook username',
    'Youtube': 'Youtube link',
    'Threads': 'Threads link',
    'X': 'X link',
    'Pinterest': 'Pinterest link',
    'Linkedin': 'Linkedin link',
    'Zalo': 'Zalo phone number',
    'Tiktok': 'Tiktok link',
    'Website': 'Website link',
    'Viber': 'Viber',
    'HotLine': 'HotLine',
}

export { labelMap };

export function Email() {
    return (
        <FontAwesomeIcon icon={faEnvelope} size="3x"/>
    )
}

export function Mobile() {
    return (
        <FontAwesomeIcon icon={faPhone} size="3x"/>
    )
}

export function Booking() {
    return (
        <Image src="/controllers/client/img/booking.png"/>
    )
}

export function OrderOnline() {
    return (
        <Image src="/controllers/client/img/order.png"/>
    )
}

export function HotSale() {
    return (
        <Image src="/controllers/client/img/hotsales.png"/>
    )
}

export function Address() {
    return (
        <FontAwesomeIcon icon={faLocationDot} size="3x"/>
    )
}

export function Facebook() {
    return (
        <i className="fa-brands fa-facebook"></i>
    )
}

export function Instagram() {
    return (
        <i className="fa-brands fa-instagram"></i>
    )
}

export function Messenger() {
    return (
        <i className="fa-brands fa-facebook-messenger"></i>
    )
}

export function Youtube() {
    return (
        <i className="fa-brands fa-youtube"></i>
    )
}

export function Threads() {
    return (
        <i className="fa-brands fa-threads"></i>
    )
}

export function X() {
    return (
        <i className="fa-brands fa-x-twitter"></i>
    )
}

export function Pinterest() {
    return (
        <i className="fa-brands fa-pinterest"></i>
    )
}

export function Linkedin() {
    return (
        <i className="fa-brands fa-linkedin"></i>
    )
}

export function Viber() {
    return (
        <i className="fa-brands fa-viber"></i>
    )
}

export function Zalo() {
    return (
        <Image src="/controllers/client/img/zalo.png"/>
    )
}

export function Tiktok() {
    return (
        <i className="fa-brands fa-tiktok"></i>
    )
}

export function Website() {
    return (
        <FontAwesomeIcon icon={faGlobe} size="3x"/>
    )
}

export function Valid() {
    return <i style={{color: "green"}} className="fa-solid fa-check"></i>
}

export function Invalid() {
    return <i style={{color: "red"}} className="fa-solid fa-x"></i>
}