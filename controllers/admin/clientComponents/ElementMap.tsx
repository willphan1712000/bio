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
    'Whatsapp': <Whatsapp />,
    'HotLine': <Mobile />,
    'Tiktok': <Tiktok />,
    'Website': <Website />,
    'Valid': <Valid />,
    'Invalid': <Invalid />
};

export { iconMap };

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

export function Whatsapp() {
    return (
        <i className="fa-brands fa-whatsapp"></i>
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

export const fonts = [
    "'Exo 2', sans-serif",
    "'Asap', sans-serif",
    "'Josefin Sans', sans-serif",
    "'Macondo', cursive",
    "'Oleo Script', cursive",
    "'Pacifico', cursive",
    "'Playfair Display', serif",
    "'Tapestry', cursive",
    "'Titillium Web', sans-serif",
    "'Yanone Kaffeesatz', sans-serif",
    "'Zen Loop', cursive",
    "'Bebas Neue'",
    "'Joan'",
    "'Montserrat'",
    "'Nunito Sans'",
    "'Playfair Display'",
    "'Roboto Slab'",
    "'Source Sans Pro'",
    "'Tai Heritage Pro'",
    "'Ubuntu'"
]

export const solidColors = [
    "#000000", // Black
    "#444444", // Dark Gray
    "#777777", // Medium Gray
    "#AAAAAA", // Light Gray
    "#DDDDDD", // Very Light Gray
    "#FFFFFF", // White
    "#FF0000", // Red
    "#FF6666", // Light Red
    "#FF69B4", // Pink
    "#EE82EE", // Violet
    "#9370DB", // Medium Purple
    "#4B0082", // Indigo
    "#008080", // Teal
    "#00CED1", // Light Sea Green
    "#AFEEEE", // Pale Turquoise
    "#00BFFF", // Deep Sky Blue
    "#6495ED", // Cornflower Blue
    "#0000FF", // Blue
    "#008000", // Green
    "#90EE90", // Light Green
    "#ADFF2F", // Green Yellow
    "#FFFF00", // Yellow
    "#FFA500", // Orange
    "#FF8C00"  // Dark Orange
  ];