import { $$ } from "../../Web-Development/W";
export default class FontColor {
    constructor(container, reset, target) {
        this.reset = reset;
        this.colorPicker = $$(container).colorPickerSingle(color => {
            $(target).css({
                color: color
            });
        }, {
            default: this.reset,
        });
    }
}
