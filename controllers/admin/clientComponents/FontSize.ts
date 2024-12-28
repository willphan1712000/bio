import { RangeSlider } from "../../client/src/Web-Development/components/rangeSlider/RangeSlider";
import { $$ } from "../../client/src/Web-Development/W";


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