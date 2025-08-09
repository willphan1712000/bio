export default class Error {
    constructor(error) {
        Object.defineProperty(this, "$error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.$error = $(error);
    }
    setError(msg) {
        this.$error.html(msg);
    }
}
