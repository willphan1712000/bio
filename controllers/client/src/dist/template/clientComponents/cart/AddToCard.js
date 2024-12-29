"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const CartContext_1 = __importDefault(require("./CartContext"));
const template_1 = require("../../template");
const AddToCard = () => {
    const [state, dispatch] = (0, CartContext_1.default)();
    function handleClick(e) {
        (0, template_1.auth)(state.signin, () => {
            const current = $(e.currentTarget);
            const check = current.find(".check");
            const data = current.data("id");
            if (!check.hasClass("active")) {
                dispatch({ type: 'add', value: data });
            }
            else {
                dispatch({ type: 'remove', value: data });
            }
        });
    }
    (0, react_1.useEffect)(() => {
        Object.keys(state.items).map(item => {
            $(`.add[data-id="${item}"]`).find(".check").addClass("active");
        });
        $(".template-choice .add").click(e => handleClick(e));
        return () => {
            $(".template-choice .add").off("click", handleClick);
        };
    }, []);
    return null;
};
exports.default = AddToCard;
