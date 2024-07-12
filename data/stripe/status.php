<?php

require_once '../vendorStripe/autoload.php';
require_once '../../secrets/secrets.php';
require_once '../core.php';

$stripe = new \Stripe\StripeClient($stripeSecretKey);
header('Content-Type: application/json');

try {
  // retrieve JSON from POST body
  $jsonStr = file_get_contents('php://input');
  $jsonObj = json_decode($jsonStr);

  completePayment($jsonObj);

  $session = $stripe->checkout->sessions->retrieve($jsonObj->session_id);

  echo json_encode(['status' => $session->status, 'customer_email' => $session->customer_details->email]);
  http_response_code(200);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

function completePayment($jsonObj) {
  $itemidArr = $jsonObj->itemidArr;
  $username = $jsonObj->username;

  foreach($itemidArr as $item) {
    Database::POST("purchase", [
      'username' => $username,
      'template_id' => $item
    ]);
  }
  Database::PUT("template", "themeid", $itemidArr[0], "username='$username'");
}