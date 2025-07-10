<?php

namespace api;

use Dotenv\Dotenv;

header('Content-Type: application/json');

require_once __DIR__ . "/../../vendor/autoload.php";
Dotenv::createImmutable(__DIR__ . "/../../")->load();

abstract class APISecret implements API
{
    protected $body;

    function __construct()
    {
        $this->body = json_decode(file_get_contents("php://input"));
    }

    abstract public function handleRequest($body);

    public function execute()
    {
        // Verify user has already signed in before giving access to resources
        if ($this->body->key === $_ENV['SYSTEM_SECRET_KEY']) {
            return $this->handleRequest($this->body); // Return authorized resource
        } else {
            return [
                "success" => false,
                "error" => "Secret key is missing or incorrect, deny access to resources"
            ];
        }
    }
}
