<?php

namespace business\auth;

use api\Request;
use api\Response;

/**
 * This handles client sending request to ask for auth information
 */
class AuthController
{
    protected Request $request;
    protected Response $response;

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;
    }

    public function post()
    {
        $body = $this->request->getBody();
        $auth = new Auth($body->username ?? NULL, $body->token ?? NULL);
        return $auth->generateAuth();
    }
}
