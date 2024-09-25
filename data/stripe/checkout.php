<?php

require_once 'vendorStripe/autoload.php';
require_once '../core.php';

require_once '../vendorDotEnv/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable("../../");
$dotenv->load();

$stripe = new \Stripe\StripeClient($_ENV["STRIPE_SECRET_KEY"]);
header('Content-Type: application/json');
// retrieve JSON from POST body
$jsonStr = file_get_contents('php://input');
$jsonObj = json_decode($jsonStr);

$YOUR_DOMAIN = SystemConfig::globalVariables()['stripeRedirect'];

$checkout_session = $stripe->checkout->sessions->create([
  'ui_mode' => 'embedded',
  'line_items' => createLineItems($jsonObj->items, TemplateManagement::getProducts()),
  'mode' => 'payment',
  'return_url' => $YOUR_DOMAIN . '/checkoutComplete?session_id={CHECKOUT_SESSION_ID}&username='.$jsonObj->username.'&single='.$jsonObj->singleCheckout,
]);

function createLineItems(array $items, array $product) : array {
  $result = [];
  foreach ($items as $item) {
    $result[] = [
      'price_data' => [
        'currency' => 'usd',
        'product_data' => [
          'name' => $product[$item->id]['name'],
          'images' => [$product[$item->id]['image']],
        ],
        'unit_amount' => $product[$item->id]['price'],
      ],
      'quantity' => 1,
    ];
  }
  return $result;
}

echo json_encode(array('clientSecret' => $checkout_session->client_secret));