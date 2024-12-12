import { ColorPicker } from "../../client/src/Web-Development/components/colorPicker/ColorPicker";
import { $$ } from "../../client/src/Web-Development/W";


export default class Background {
    private colorPicker: ColorPicker;
    private reset: string;

    constructor(container: string, reset: string, target: string) {
        this.reset = reset;
        this.colorPicker = $$(container).colorPickerDouble(color => {
            $(target).css({
                background: color
            })
        }, {
            default: this.reset,
        })
    }
}