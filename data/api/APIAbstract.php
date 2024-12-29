<?php

namespace api;

use business\user\UserManagement;

header('Content-Type: application/json');
SESSION_START();

abstract class APIAbstract implements API
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
        if (UserManagement::isSignedIn($_SESSION, $this->body->username)) {
            return $this->handleRequest($this->body); // Return authorized resource
        } else {
            return [
                "success" => false,
                "error" => "User not signed in, deny access to resources"
            ];
        }
    }
}
