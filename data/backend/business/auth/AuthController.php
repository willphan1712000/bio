<?php

namespace business\auth;

use api\Request;
use api\Response;
use config\SystemConfig;

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

    public function postGenerate()
    {
        $body = $this->request->getBody();
        $headers = $this->request->getHeaders();

        try {
            $auth = new Auth($body["username"] ?? NULL, $headers[SystemConfig::globalVariables()['auth']['token_property']] ?? NULL);
            $this->response->setStatusCode(200)->json([
                "success" => true,
                "data" => $auth->generateAuth()
            ]);
        } catch (\Exception $e) {
            $this->response->setStatusCode(400)->json([
                "success" => false,
                "error" => $e->getMessage()
            ]);
        }
    }

    public function postValidate()
    {
        $body = $this->request->getBody();
        $headers = $this->request->getHeaders();

        try {
            $validate = new Auth($body["username"] ?? NULL, $headers[SystemConfig::globalVariables()['auth']['token_property']] ?? NULL);
            $this->response->setStatusCode(200)->json([
                "success" => true,
                "data" => $validate->auth()
            ]);
        } catch (\Exception $e) {
            $this->response->setStatusCode(400)->json([
                "success" => false,
                "error" => $e->getMessage()
            ]);
        }
    }
}
