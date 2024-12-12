import {RangeSlider} from "../../../Web-Development/components/rangeSlider/RangeSlider";
import { $$ } from "../../../Web-Development/W";

export default class FontSize {
     private rangeSlider: RangeSlider;

     constructor(containter: string, reset: number, target: string) {
        this.rangeSlider = $$(containter).rangeSlider(value => {
            $(target).css({
                "fontSize": value + "px"
            })
        }, {
            default: reset,
            unit: "px",
            range: [0, 25]
        })
     }
}