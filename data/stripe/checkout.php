<?php

use config\SystemConfig;
use business\template\TemplateManagement;
use Stripe\StripeClient;

require_once __DIR__ . '/../../vendor/autoload.php';
Dotenv\Dotenv::createImmutable(__DIR__ . "/../../")->load();

SESSION_START();

try {
  $stripe = new StripeClient($_ENV["STRIPE_SECRET_KEY"]);
  header('Content-Type: application/json');
  // retrieve JSON from POST body
  $jsonStr = file_get_contents('php://input');
  $jsonObj = json_decode($jsonStr);

  $YOUR_DOMAIN = SystemConfig::globalVariables()['stripeRedirect'];
  $productList = TemplateManagement::getProducts();
  $user = $jsonObj->user;

  // echo json_encode($stripe);
  // die();

  $checkout_session = $stripe->checkout->sessions->create([
    'ui_mode' => 'embedded',
    'line_items' => createLineItems($jsonObj->items, $productList, $user),
    'mode' => 'payment',
    'return_url' => $YOUR_DOMAIN . '/@return?session_id={CHECKOUT_SESSION_ID}',
  ]);


  echo json_encode(array('clientSecret' => $checkout_session->client_secret));
} catch (\Exception $e) {
  echo json_encode(array('clientSecret' => [
    'success' => false,
    'error' => $e->getMessage()
  ]));
}

function createLineItems(array $items, array $product, string $user): array
{
  $result = [];
  foreach ($items as $item) {
    if (TemplateManagement::isAbleToPurchase($_SESSION, $user, $item->id))
      $result[] = [
        'price_data' => [
          'currency' => 'usd',
          'product_data' => [
            'name' =>  $product[$item->id]['name'],
            'images' => [$product[$item->id]['image']],
          ],
          'unit_amount' => $product[$item->id]['price'],
        ],
        'quantity' => 1,
      ];
  }
  return $result;
}
