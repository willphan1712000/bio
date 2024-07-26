<?php
  $g = SystemConfig::globalVariables();

  $username = SystemConfig::URLExtraction("username");
  $itemid = SystemConfig::URLExtraction("itemid");

  SESSION_START();
  $isSignedIn = UserManagement::isSignedIn($_SESSION, $username, "/signin");

  if(!$isSignedIn) {
    header("Location: /template");
  }

  if(!TemplateManagement::isAbleToPurchase($isSignedIn, $username, $itemid)) {
    header("Location: /template?username=".$username);
  }
?> <!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Accept a payment</title><meta name="description" content="A demo of a payment on Stripe"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="https://js.stripe.com/v3/"></script><style>body {
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
      }</style><script defer="defer" src="/dist/universalc99ab0fbf8091608a4d8.js"></script><script defer="defer" src="/dist/checkoutcss9c891d3430f27563d6a3.js"></script><script defer="defer" src="/dist/checkoutjs1f0ed758855f4f7e59b5.js"></script></head><body><a href="/template?username=<?=$username;?>" class="cancel">Cancel</a><!-- Display a payment form --><div id="checkout"><!-- Checkout will insert the payment form here --></div><script>const singleCheckout = "<?=$itemid? $itemid : "null";?>";
      const username = "<?=$username? $username : "null";?>"</script></body></html>