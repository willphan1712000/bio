"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelMap = exports.iconMap = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const Image_1 = __importDefault(require("../../client/src/Web-Development/components/Image"));
const iconMap = {
    'Email': (0, jsx_runtime_1.jsx)(Email, {}),
    'Mobile': (0, jsx_runtime_1.jsx)(Mobile, {}),
    'Work': (0, jsx_runtime_1.jsx)(Mobile, {}),
    'Booking': (0, jsx_runtime_1.jsx)(Booking, {}),
    'OrderOnline': (0, jsx_runtime_1.jsx)(OrderOnline, {}),
    'HotSale': (0, jsx_runtime_1.jsx)(HotSale, {}),
    'Address': (0, jsx_runtime_1.jsx)(Address, {}),
    'Facebook': (0, jsx_runtime_1.jsx)(Facebook, {}),
    'Instagram': (0, jsx_runtime_1.jsx)(Instagram, {}),
    'Messenger': (0, jsx_runtime_1.jsx)(Messenger, {}),
    'Youtube': (0, jsx_runtime_1.jsx)(Youtube, {}),
    'Threads': (0, jsx_runtime_1.jsx)(Threads, {}),
    'X': (0, jsx_runtime_1.jsx)(X, {}),
    'Pinterest': (0, jsx_runtime_1.jsx)(Pinterest, {}),
    'Linkedin': (0, jsx_runtime_1.jsx)(Linkedin, {}),
    'Zalo': (0, jsx_runtime_1.jsx)(Zalo, {}),
    'Viber': (0, jsx_runtime_1.jsx)(Viber, {}),
    'HotLine': (0, jsx_runtime_1.jsx)(Mobile, {}),
    'Tiktok': (0, jsx_runtime_1.jsx)(Tiktok, {}),
    'Website': (0, jsx_runtime_1.jsx)(Website, {}),
    'Valid': (0, jsx_runtime_1.jsx)(Valid, {}),
    'Invalid': (0, jsx_runtime_1.jsx)(Invalid, {})
};
exports.iconMap = iconMap;
const labelMap = {
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
};
exports.labelMap = labelMap;
function Email() {
    return ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEnvelope, size: "3x" }));
}
function Mobile() {
    return ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPhone, size: "3x" }));
}
function Booking() {
    return ((0, jsx_runtime_1.jsx)(Image_1.default, { src: "/controllers/client/img/booking.png" }));
}
function OrderOnline() {
    return ((0, jsx_runtime_1.jsx)(Image_1.default, { src: "/controllers/client/img/order.png" }));
}
function HotSale() {
    return ((0, jsx_runtime_1.jsx)(Image_1.default, { src: "/controllers/client/img/hotsales.png" }));
}
function Address() {
    return ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLocationDot, size: "3x" }));
}
function Facebook() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-facebook" }));
}
function Instagram() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-instagram" }));
}
function Messenger() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-facebook-messenger" }));
}
function Youtube() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-youtube" }));
}
function Threads() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-threads" }));
}
function X() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-x-twitter" }));
}
function Pinterest() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-pinterest" }));
}
function Linkedin() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-linkedin" }));
}
function Viber() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-viber" }));
}
function Zalo() {
    return ((0, jsx_runtime_1.jsx)(Image_1.default, { src: "/controllers/client/img/zalo.png" }));
}
function Tiktok() {
    return ((0, jsx_runtime_1.jsx)("i", { className: "fa-brands fa-tiktok" }));
}
function Website() {
    return ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faGlobe, size: "3x" }));
}
function Valid() {
    return (0, jsx_runtime_1.jsx)("i", { style: { color: "green" }, className: "fa-solid fa-check" });
}
function Invalid() {
    return (0, jsx_runtime_1.jsx)("i", { style: { color: "red" }, className: "fa-solid fa-x" });
}
