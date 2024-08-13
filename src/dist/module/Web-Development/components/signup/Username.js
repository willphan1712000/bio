export default class Username {
    constructor(username, signUpUI) {
        this.$username = $(username);
        this.$username.on("input", e => {
            signUpUI.update();
        });
    }
    getUsername() {
        return this.removeSpace(this.$username.val());
    }
    isFilled() {
        return this.$username.val() !== "";
    }
    removeSpace(text) {
        return text.replace(/\s+/g, '');
    }
}
