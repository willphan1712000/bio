import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { getQueryStr, username } from "../../template/clientComponents/TemplateContext";
import { getItems, getUser, listPush, setLocalStorage } from "./checkoutContext";
import { $$$ } from '../../client/src/Web-Development/WW';
import Response from '../../client/src/Web-Development/components/Response';

const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY as string

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
const stripePromise = loadStripe(publishableKey);

const CheckoutForm = () => {
  const user = username() as string
  const itemid = getQueryStr('itemid') as string
  const cart = JSON.parse(localStorage.getItem(user)!); // get cart from local storage

  const items: Array<any> = getItems(cart, itemid); // items object will be sent over the server for processing
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/data/stripe/checkout.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, items })
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret)
  }, []);

  useEffect(() => {
    async function get() {
      try {
        const r = await fetchClientSecret()
        if(!r.success && r.success !== undefined) {
          alert(r.error)
        }
      } catch(e) {
        alert(e)
      }
    }

    get()

    setLocalStorage(user, cart, itemid)
  }, [])

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [count, setCount] = useState(5)

  if(count === 0) {
    window.location.href = '/' + getUser()
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
    let countDown: NodeJS.Timeout

    // function push to put purchased template to database
    async function push() {
      try {
        const r = await $$$("/data/api/purchase/POST.php", listPush()).api().post() as Response
        if(r.success) {
          countDown = setInterval(() => {
            setCount(prev => prev - 1)
          }, 1000)
        } else {
          alert(r.error)
        }
      } catch (error) {
        alert("Error: " + error)
      }
    }

    if(status === 'complete') {
      push()
    }

    return () => {
      clearInterval(countDown)
    }
  }, [])

  if (status === 'open') {
    return (
      <Navigate to="/@checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <div className='flex justify-center items-center p-[40px] flex-col w-screen h-screen'>
        <div className='w-[100px] mb-[40px]'>
          <img draggable={false} src="/controllers/client/img/done.png" alt="payment_complete" />
        </div>
        <section id="success">
          <p className='text-center text-[30px]'>
            Thank you for your purchase
          </p>
          <p className='text-center text-[20px]'>
            A confirmation email will be sent to {customerEmail}
          </p>
          <p className='text-center text-[20px]'>
            Going to your purchased template in {count} second{count <= 1 ? '' : 's'}
          </p>
        </section>
      </div>
    )
  }

  return null;
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/@checkout" element={<CheckoutForm />} />
          <Route path="/@return" element={<Return />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;