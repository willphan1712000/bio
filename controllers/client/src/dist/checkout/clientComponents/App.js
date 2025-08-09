var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback, useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getQueryStr, username } from "../../template/clientComponents/TemplateContext";
import { getItems, getUser, listPush, setLocalStorage } from "./checkoutContext";
import { $$$ } from '../../client/src/Web-Development/WW';
const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);
const CheckoutForm = () => {
    const user = username();
    const itemid = getQueryStr('itemid');
    const cart = JSON.parse(localStorage.getItem(user));
    const items = getItems(cart, itemid);
    const fetchClientSecret = useCallback(() => {
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
    useEffect(() => {
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
        setLocalStorage(user, cart, itemid);
    }, []);
    const options = { fetchClientSecret };
    return (_jsx("div", { id: "checkout", children: _jsx(EmbeddedCheckoutProvider, { stripe: stripePromise, options: options, children: _jsx(EmbeddedCheckout, {}) }) }));
};
const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
    const [count, setCount] = useState(5);
    if (count === 0) {
        window.location.href = '/' + getUser();
    }
    useEffect(() => {
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
    useEffect(() => {
        let countDown;
        function push() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const r = yield $$$("/data/api/purchase/POST.php", listPush()).api().post();
                    if (r.success) {
                        localStorage.removeItem(getUser());
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
        return (_jsx(Navigate, { to: "/@checkout" }));
    }
    if (status === 'complete') {
        return (_jsxs("div", { className: 'flex justify-center items-center p-[40px] flex-col w-screen h-screen', children: [_jsx("div", { className: 'w-[100px] mb-[40px]', children: _jsx("img", { draggable: false, src: "/controllers/client/img/done.png", alt: "payment_complete" }) }), _jsxs("section", { id: "success", children: [_jsx("p", { className: 'text-center text-[30px]', children: "Thank you for your purchase" }), _jsxs("p", { className: 'text-center text-[20px]', children: ["A confirmation email will be sent to ", customerEmail] }), _jsxs("p", { className: 'text-center text-[20px]', children: ["Going to your purchased template in ", count, " second", count <= 1 ? '' : 's'] })] })] }));
    }
    return null;
};
const App = () => {
    return (_jsx("div", { className: "App", children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/@checkout", element: _jsx(CheckoutForm, {}) }), _jsx(Route, { path: "/@return", element: _jsx(Return, {}) })] }) }) }));
};
export default App;
