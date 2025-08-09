export default class Password {
    constructor(password, signUpUI) {
        Object.defineProperty(this, "$password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$password = $(password);
        this.$password.on("input", e => {
            signUpUI.update();
        });
    }
    getPassword() {
        return this.$password.val();
    }
}
