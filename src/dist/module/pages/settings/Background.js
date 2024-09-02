import { $$ } from "../../Web-Development/W";
export default class Background {
    constructor(container, reset, target) {
        this.reset = reset;
        this.colorPicker = $$(container).colorPicker(color => {
            $(target).css({
                background: color
            });
        }, {
            default: this.reset,
        });
    }
}
