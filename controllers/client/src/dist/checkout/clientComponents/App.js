"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_stripe_js_1 = require("@stripe/react-stripe-js");
const stripe_js_1 = require("@stripe/stripe-js");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const TemplateContext_1 = require("../../template/clientComponents/TemplateContext");
const checkoutContext_1 = require("./checkoutContext");
const WW_1 = require("../../client/src/Web-Development/WW");
const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripePromise = (0, stripe_js_1.loadStripe)(publishableKey);
const CheckoutForm = () => {
    const user = (0, TemplateContext_1.username)();
    const itemid = (0, TemplateContext_1.getQueryStr)('itemid');
    const cart = JSON.parse(localStorage.getItem(user));
    const items = (0, checkoutContext_1.getItems)(cart, itemid);
    const fetchClientSecret = (0, react_1.useCallback)(() => {
        return fetch("/data/stripe/checkout.php", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, items })
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);
    (0, react_1.useEffect)(() => {
        function get() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const r = yield fetchClientSecret();
                    if (!r.success && r.success !== undefined) {
                        alert(r.error);
                    }
                }
                catch (e) {
                    alert(e);
                }
            });
        }
        get();
        (0, checkoutContext_1.setLocalStorage)(user, cart, itemid);
    }, []);
    const options = { fetchClientSecret };
    return ((0, jsx_runtime_1.jsx)("div", { id: "checkout", children: (0, jsx_runtime_1.jsx)(react_stripe_js_1.EmbeddedCheckoutProvider, { stripe: stripePromise, options: options, children: (0, jsx_runtime_1.jsx)(react_stripe_js_1.EmbeddedCheckout, {}) }) }));
};
const Return = () => {
    const [status, setStatus] = (0, react_1.useState)(null);
    const [customerEmail, setCustomerEmail] = (0, react_1.useState)('');
    const [count, setCount] = (0, react_1.useState)(5);
    if (count === 0) {
        window.location.href = '/' + (0, checkoutContext_1.getUser)();
    }
    (0, react_1.useEffect)(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        fetch("/data/stripe/status.php", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ session_id: sessionId }),
        })
            .then((res) => res.json())
            .then((data) => {
            setStatus(data.status);
            setCustomerEmail(data.customer_email);
        });
    }, []);
    (0, react_1.useEffect)(() => {
        let countDown;
        function push() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const r = yield (0, WW_1.$$$)("/data/api/purchase/POST.php", (0, checkoutContext_1.listPush)()).api().post();
                    if (r.success) {
                        countDown = setInterval(() => {
                            setCount(prev => prev - 1);
                        }, 1000);
                    }
                    else {
                        alert(r.error);
                    }
                }
                catch (error) {
                    alert("Error: " + error);
                }
            });
        }
        if (status === 'complete') {
            push();
        }
        return () => {
            clearInterval(countDown);
        };
    }, [status]);
    if (status === 'open') {
        return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/@checkout" }));
    }
    if (status === 'complete') {
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-center items-center p-[40px] flex-col w-screen h-screen', children: [(0, jsx_runtime_1.jsx)("div", { className: 'w-[100px] mb-[40px]', children: (0, jsx_runtime_1.jsx)("img", { draggable: false, src: "/controllers/client/img/done.png", alt: "payment_complete" }) }), (0, jsx_runtime_1.jsxs)("section", { id: "success", children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-center text-[30px]', children: "Thank you for your purchase" }), (0, jsx_runtime_1.jsxs)("p", { className: 'text-center text-[20px]', children: ["A confirmation email will be sent to ", customerEmail] }), (0, jsx_runtime_1.jsxs)("p", { className: 'text-center text-[20px]', children: ["Going to your purchased template in ", count, " second", count <= 1 ? '' : 's'] })] })] }));
    }
    return null;
};
const App = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/@checkout", element: (0, jsx_runtime_1.jsx)(CheckoutForm, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/@return", element: (0, jsx_runtime_1.jsx)(Return, {}) })] }) }) }));
};
exports.default = App;
