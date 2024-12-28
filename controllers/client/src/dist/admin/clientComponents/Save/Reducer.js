"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
function reducer(state, action) {
    switch (action.type) {
        case 'submit':
            return Object.assign(Object.assign({}, state), { isSubmitting: !state.isSubmitting });
        case 'show':
            return Object.assign(Object.assign({}, state), { isShow: !state.isShow });
        case 'message':
            return Object.assign(Object.assign({}, state), { msg: action.value });
        case 'disable':
            return Object.assign(Object.assign({}, state), { disabled: !state.disabled });
        case 'default':
            return Object.assign(Object.assign({}, state), { msg: state.default });
        default:
            throw new Error("Unknown action type");
    }
}
