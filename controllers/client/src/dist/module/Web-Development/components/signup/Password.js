export default class Password {
    constructor(password, signUpUI) {
        this.$password = $(password);
        this.$password.on("input", e => {
            signUpUI.update();
        });
    }
    getPassword() {
        return this.$password.val();
    }
    isValidPassword() {
        const password = this.$password.val();
        const isValidLength = password.length >= 12;
        let hasUpperCase = false;
        let hasDigit = false;
        let hasSpecialChar = true;
        for (let i = 0; i < password.length; i++) {
            const position = password.charCodeAt(i);
            if (position >= 65 && position <= 90) {
                hasUpperCase = true;
            }
            if (position >= 48 && position <= 57) {
                hasDigit = true;
            }
            if (position >= 33 && position <= 47) {
                hasSpecialChar = true;
            }
            if (hasUpperCase && hasDigit && hasSpecialChar) {
                return isValidLength && hasUpperCase && hasDigit && hasSpecialChar;
            }
        }
        return false;
    }
}
