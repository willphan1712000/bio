import { faCartShopping, faEnvelope, faLocationDot, faPhone, faUniversalAccess, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

const iconMap: {
    [key: string]: ReactNode
} = {
    'Email': <Email />,
    'Mobile': <Mobile />,
    'Work': <Work />,
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
    'Tiktok': <Tiktok />,
    'Website': <Website />,
};
export default iconMap;

const labelMap: {
    [key: string]: string
} = {
    'Email': 'Your email',
    'Mobile': 'Mobile phone number',
    'Work': 'Work phone number',
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
    'Website': 'Website line',
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

export function Work() {
    return (
        <FontAwesomeIcon icon={faPhone} size="3x"/>
    )
}

export function Booking() {
    return (
        <img className="icon" src="/controllers/client/img/booking.png" />
    )
}

export function OrderOnline() {
    return (
        <img className="icon" src="/controllers/client/img/order.png" />
    )
}

export function HotSale() {
    return (
        <img className="icon" src="/controllers/client/img/hotsales.png" />
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

export function Zalo() {
    return (
        <i className="fa-brands fa-viber"></i>
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