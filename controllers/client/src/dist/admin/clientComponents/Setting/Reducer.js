"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
function reducer(state, action) {
    switch (action.type) {
        case 'background':
            return {
                background: action.value,
                font: false,
                fontSize: false,
                fontColor: false
            };
        case 'font':
            return {
                background: false,
                font: action.value,
                fontSize: false,
                fontColor: false
            };
        case 'fontSize':
            return {
                background: false,
                font: false,
                fontColor: false,
                fontSize: action.value
            };
        case 'fontColor':
            return {
                background: false,
                font: false,
                fontSize: false,
                fontColor: action.value
            };
        default:
            throw new Error("Action type is undefined");
    }
}
