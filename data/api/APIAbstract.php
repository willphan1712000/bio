<?php

namespace api;

use business\UserManagement;

header('Content-Type: application/json');
SESSION_START();

abstract class APIAbstract
{
    protected $body;

    function __construct()
    {
        $this->body = json_decode(file_get_contents("php://input"));
    }

    abstract public function handleRequest($body);

    public function execute()
    {
        // Verify user has already signed in before giving access to them
        if (!UserManagement::isSignedIn($_SESSION, $this->body->username)) {
            return $this->handleRequest($this->body); // Return authorized resource
        } else {
            return [
                "error" => "User not signed in, deny access to resources"
            ];
        }
    }
}
