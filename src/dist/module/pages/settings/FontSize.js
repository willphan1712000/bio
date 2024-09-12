import { $$ } from "../../Web-Development/W";
export default class FontSize {
    constructor(containter, reset, target) {
        this.rangeSlider = $$(containter).rangeSlider(value => {
            $(target).css({
                "fontSize": value + "px"
            });
        }, {
            default: reset,
            unit: "px",
            range: [0, 25]
        });
    }
}
