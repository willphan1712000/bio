import { ColorPicker } from "../../Web-Development/components/colorPicker/ColorPicker";
import { $$ } from "../../Web-Development/W";

export default class FontColor {
    private colorPicker: ColorPicker;
    private reset: string;

    constructor(container: string, reset: string, target: string) {
        this.reset = reset;
        this.colorPicker = $$(container).colorPickerSingle(color => {
            $(target).css({
                color: color
            })
        }, {
            default: this.reset,
        })
    }
}