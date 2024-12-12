"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../../client/src/Web-Development/W");
class Font {
    constructor(container, reset, target) {
        this.options = (0, W_1.$$)(container).options(e => {
            $(target).css({
                'fontFamily': e
            });
        }, {
            default: reset,
            list: [
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
                "'Joan'",
                "'Montserrat'",
                "'Nunito Sans'",
                "'Playfair Display'",
                "'Roboto Slab'",
                "'Source Sans Pro'",
                "'Tai Heritage Pro'",
                "'Ubuntu'"
            ],
            representative: 'A'
        });
    }
}
exports.default = Font;
