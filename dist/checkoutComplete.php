<!DOCTYPE html><html><head><title>Thanks for your order!</title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><style>#success {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      height: 100svh;
      height: 100dvh;
      width: 100%;
    }
    i {
      background-color: green;
      border-radius: 50%;
      padding: 40x;
      padding: 25px;
      color: #fff;
      font-size: 40px;
      margin-bottom: 20px;
    }
    .msg {
      font-size: 15px;
      text-align: center;
      padding: 0px 20px;
    }</style><script src="/dist/tailwind429dda0eae2ed7e674b3.js"></script><script src="/dist/universal338525335f3c1d0938f4.js"></script></head><body><section id="success" class="hidden"><i class="fa-solid fa-check"></i><p class="msg">We appreciate your business! A confirmation email will be sent to <span id="customer-email"></span>.</p></section><script>initialize();

        async function initialize() {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const sessionId = urlParams.get('session_id');
          const username = urlParams.get('username');
          const singleCheckout = urlParams.get('single');
          // Process payment to database
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

          const response = await fetch("/data/stripe/checkoutComplete.php", {
              headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({ session_id: sessionId, session_username: username, session_items: items }),
          });
          const session = await response.json();

          if (session.status == 'open') {
              window.replace('http://localhost:4242/checkout.html')
          } else if (session.status == 'complete') {
              document.getElementById('success').classList.remove('hidden');
              document.getElementById('customer-email').textContent = session.customer_email
              localStorage.clear(); // reset cart
              window.location.href = '/' + username // redirect to usrename public page
          }
        }</script></body></html>