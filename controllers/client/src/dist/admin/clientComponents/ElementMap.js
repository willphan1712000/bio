import { jsx as _jsx } from "react/jsx-runtime";
import { faEnvelope, faGlobe, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../client/src/Web-Development/components/Image";
const iconMap = {
    'Email': _jsx(Email, {}),
    'Mobile': _jsx(Mobile, {}),
    'Work': _jsx(Mobile, {}),
    'Booking': _jsx(Booking, {}),
    'OrderOnline': _jsx(OrderOnline, {}),
    'HotSale': _jsx(HotSale, {}),
    'Address': _jsx(Address, {}),
    'Facebook': _jsx(Facebook, {}),
    'Instagram': _jsx(Instagram, {}),
    'Messenger': _jsx(Messenger, {}),
    'Youtube': _jsx(Youtube, {}),
    'Threads': _jsx(Threads, {}),
    'X': _jsx(X, {}),
    'Pinterest': _jsx(Pinterest, {}),
    'Linkedin': _jsx(Linkedin, {}),
    'Zalo': _jsx(Zalo, {}),
    'Viber': _jsx(Viber, {}),
    'Whatsapp': _jsx(Whatsapp, {}),
    'HotLine': _jsx(Mobile, {}),
    'Tiktok': _jsx(Tiktok, {}),
    'Website': _jsx(Website, {}),
    'Valid': _jsx(Valid, {}),
    'Invalid': _jsx(Invalid, {})
};
export function Email() {
    return (_jsx(FontAwesomeIcon, { icon: faEnvelope, size: "3x" }));
}
export function Mobile() {
    return (_jsx(FontAwesomeIcon, { icon: faPhone, size: "3x" }));
}
export function Booking() {
    return (_jsx(Image, { src: "/controllers/client/img/booking.png" }));
}
export function OrderOnline() {
    return (_jsx(Image, { src: "/controllers/client/img/order.png" }));
}
export function HotSale() {
    return (_jsx(Image, { src: "/controllers/client/img/hotsales.png" }));
}
export function Address() {
    return (_jsx(FontAwesomeIcon, { icon: faLocationDot, size: "3x" }));
}
export function Facebook() {
    return (_jsx("i", { className: "fa-brands fa-facebook" }));
}
export function Instagram() {
    return (_jsx("i", { className: "fa-brands fa-instagram" }));
}
export function Messenger() {
    return (_jsx("i", { className: "fa-brands fa-facebook-messenger" }));
}
export function Youtube() {
    return (_jsx("i", { className: "fa-brands fa-youtube" }));
}
export function Threads() {
    return (_jsx("i", { className: "fa-brands fa-threads" }));
}
export function X() {
    return (_jsx("i", { className: "fa-brands fa-x-twitter" }));
}
export function Pinterest() {
    return (_jsx("i", { className: "fa-brands fa-pinterest" }));
}
export function Linkedin() {
    return (_jsx("i", { className: "fa-brands fa-linkedin" }));
}
export function Viber() {
    return (_jsx("i", { className: "fa-brands fa-viber" }));
}
export function Whatsapp() {
    return (_jsx("i", { className: "fa-brands fa-whatsapp" }));
}
export function Zalo() {
    return (_jsx(Image, { src: "/controllers/client/img/zalo.png" }));
}
export function Tiktok() {
    return (_jsx("i", { className: "fa-brands fa-tiktok" }));
}
export function Website() {
    return (_jsx(FontAwesomeIcon, { icon: faGlobe, size: "3x" }));
}
export function Valid() {
    return _jsx("i", { style: { color: "green" }, className: "fa-solid fa-check" });
}
export function Invalid() {
    return _jsx("i", { style: { color: "red" }, className: "fa-solid fa-x" });
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
];
export const solidColors = [
    "#000000",
    "#444444",
    "#777777",
    "#AAAAAA",
    "#DDDDDD",
    "#FFFFFF",
    "#FF0000",
    "#FF6666",
    "#FF69B4",
    "#EE82EE",
    "#9370DB",
    "#4B0082",
    "#008080",
    "#00CED1",
    "#AFEEEE",
    "#00BFFF",
    "#6495ED",
    "#0000FF",
    "#008000",
    "#90EE90",
    "#ADFF2F",
    "#FFFF00",
    "#FFA500",
    "#FF8C00"
];
