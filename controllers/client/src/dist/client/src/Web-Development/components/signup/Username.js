export default class Username {
    constructor(username, signUpUI) {
        Object.defineProperty(this, "$username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$username = $(username);
        this.$username.on("input", e => {
            signUpUI.update();
        });
    }
    getUsername() {
        return this.$username.val();
    }
    isFilled() {
        return this.$username.val() !== "";
    }
    removeSpace(text) {
        return text.replace(/\s+/g, '');
    }
}
