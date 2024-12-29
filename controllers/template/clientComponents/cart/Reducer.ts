import { username } from "../TemplateContext";
import { Action, State } from "./CartContext";

export default function reducer(state: State, action : Action) {
    switch(action.type) {
        case 'add':
            var items = state.items
            items[action.value] = 1
            localStorage.setItem(username()!, JSON.stringify(items))
            $(`.add[data-id="${action.value}"]`).find(".check").addClass("active")
            return {
                ...state,
                items
            }
        case 'remove':
            var items = state.items
            delete items[action.value]
            localStorage.setItem(username()!, JSON.stringify(items))
            $(`.add[data-id="${action.value}"]`).find(".check").removeClass("active")
            return {
                ...state,
                items
            }
        case 'show':
            return {
                ...state,
                show: !state.show
            }
        default:
            throw new Error("Unknown action type")
    }
}