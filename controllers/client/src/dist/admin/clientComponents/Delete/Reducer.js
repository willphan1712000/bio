"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
function reducer(state, action) {
    switch (action.type) {
        case 'show':
            return Object.assign(Object.assign({}, state), { show: !state.show });
        case 'delete':
            return Object.assign(Object.assign({}, state), { isDeleting: !state.isDeleting });
        case 'disable':
            return Object.assign(Object.assign({}, state), { disabled: !state.disabled });
        case 'msg':
            return Object.assign(Object.assign({}, state), { msg: action.value });
        default:
            throw new Error("Unknown action type");
    }
}
