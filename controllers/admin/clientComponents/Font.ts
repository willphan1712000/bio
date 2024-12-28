import { Options } from "../../client/src/Web-Development/components/options/Options"
import { $$ } from "../../client/src/Web-Development/W"


export default class Font {
    private options: Options

    constructor(container: string, reset: string, target: string) {
        this.options = $$(container).options(e => {
            $(target).css({
                'fontFamily': e
            })
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
        })
    }
}