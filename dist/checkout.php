<?php
  $g = SystemConfig::globalVariables();
  SESSION_START();
  $query = parse_url($_SERVER['REQUEST_URI'])['query'];
  parse_str($query, $query_params);
  $username = isset($query_params['username']) ? $query_params['username'] : null;
  $itemid = isset($query_params['itemid']) ? $query_params['itemid'] : null;
  if($username !== null) {
    if(!isset($_SESSION[$username])) {
      header("Location: /template");
    }
  } else {
    header("Location: /template");
  }
?> <!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Accept a payment</title><meta name="description" content="A demo of a payment on Stripe"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="https://js.stripe.com/v3/"></script><script type="module" src="/src/checkout.js" defer="defer"></script><style>body {
        display: flex;
        justify-content: center;
        background: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Helvetica Neue', 'Ubuntu', sans-serif;
        height: 100vh;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      section {
        background: #ffffff;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 112px;
        border-radius: 6px;
        justify-content: space-between;
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.154px;
        color: #242d60;
        height: 100%;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
      }
      #checkout {
        width: 100vw;
      }
      .hidden {
        display: none;
      }</style><script defer="defer" src="/dist/universal056b5415057854568042.js"></script><script defer="defer" src="/dist/checkoutcss2437fb45fa5ebf137cab.js"></script><script defer="defer" src="/dist/checkoutjsd9a40b4d024e4a4002d5.js"></script></head><body><!-- Display a payment form --><div id="checkout"><!-- Checkout will insert the payment form here --></div><script>const singleCheckout = "<?=$itemid;?>";</script></body></html>