<?php
require_once 'vendorStripe/autoload.php';
require_once '../core.php';
require_once '../vendorDotEnv/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable("../../");
$dotenv->load();

$stripe = new \Stripe\StripeClient($_ENV["STRIPE_SECRET_KEY"]);
header('Content-Type: application/json');

try {
  // retrieve JSON from POST body
  $jsonStr = file_get_contents('php://input');
  $jsonObj = json_decode($jsonStr);

  Purchase::purchaseProcessing($jsonObj->session_username, $jsonObj->session_items);

  $session = $stripe->checkout->sessions->retrieve($jsonObj->session_id);

  echo json_encode(['status' => $session->status, 'customer_email' => $session->customer_details->email]);
  http_response_code(200);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}