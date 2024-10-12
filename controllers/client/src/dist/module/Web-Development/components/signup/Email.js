export default class Email {
    constructor(email, signUpUI) {
        this.$email = $(email);
        this.$email.on("input", e => {
            signUpUI.update();
        });
    }
    getEmail() {
        return this.$email.val();
    }
    isValidEmail() {
        const email = this.$email.val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
