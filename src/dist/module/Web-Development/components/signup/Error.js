export default class Error {
    constructor(error) {
        this.$error = $(error);
    }
    setError(msg) {
        this.$error.html(msg);
    }
}
