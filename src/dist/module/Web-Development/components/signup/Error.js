export default class Error {
    constructor(error, signUpUI) {
        this.$error = $(error);
    }
    setError(msg) {
        this.$error.html(msg);
    }
}
