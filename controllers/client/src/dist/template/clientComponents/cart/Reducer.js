"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
const TemplateContext_1 = require("../TemplateContext");
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            var items = state.items;
            items[action.value] = 1;
            localStorage.setItem((0, TemplateContext_1.username)(), JSON.stringify(items));
            $(`.add[data-id="${action.value}"]`).find(".check").addClass("active");
            return Object.assign(Object.assign({}, state), { items });
        case 'remove':
            var items = state.items;
            delete items[action.value];
            localStorage.setItem((0, TemplateContext_1.username)(), JSON.stringify(items));
            $(`.add[data-id="${action.value}"]`).find(".check").removeClass("active");
            return Object.assign(Object.assign({}, state), { items });
        case 'show':
            return Object.assign(Object.assign({}, state), { show: !state.show });
        default:
            throw new Error("Unknown action type");
    }
}
