<?php

use controllers\checkout\checkoutController;

$checkout = new checkoutController();
$checkout->execute();
$username = $checkout->get("username");
$href = '/@template?username=' . $username;
?> <!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Accept a payment</title><meta name="description" content="A demo of a payment on Stripe"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script src="/dist/tailwind7c4b8c62ec3e53eac047.js"></script><script src="/dist/universal2ba20df9b06e3d2d0bf4.js"></script><script src="/dist/checkoutjs84008e694959b27e398b.js"></script></head><body><noscript>You need to enable JavaScript to run this app.</noscript><a href="<?= $href; ?>" class="fixed top-[10px] right-[10px] rounded-[20px] p-[10px] bg-[#f0f0f0]">Cancel</a><!-- Display a payment form --><div id="checkout"></div><!--
    This HTML file is a template.
    If you open it directly in the browser, you will see an empty page.
    You can add webfonts, meta tags, or analytics to this file.
    The build step will place the bundled scripts into the <body> tag.
    To begin the development, run `npm start` or `yarn start`.
    To create a production bundle, use `npm run build` or `yarn build`.
  --></body></html>