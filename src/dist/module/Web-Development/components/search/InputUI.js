export default class InputUI {
    constructor(input, searchUI) {
        this.$input = $(input);
        this.value = "";
        this.$input.on("input", e => {
            this.value = e.target.value;
            searchUI.update();
        });
    }
    getValue() {
        return this.value;
    }
}
