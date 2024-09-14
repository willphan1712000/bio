import {publishableKey} from '../secrets/serects.js';

let cart = JSON.parse(localStorage.getItem("cart")); // get cart from local storage
const items = []; // items object will be sent over the server for processing

// Check if there is a single checkout
if(singleCheckout !== "null") {
  cart = {}
  cart[singleCheckout] = true
}

// for loop to make the items object complete
for(const key in cart) {
  items.push({
    id: key,
    quantity: cart[key] ? 1 : cart[key],
  })
}

// This is your test secret API key.
const stripe = Stripe(publishableKey);

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/data/stripe/checkout.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, username, singleCheckout }),
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}