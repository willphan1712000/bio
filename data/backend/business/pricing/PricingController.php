<?php

namespace business\pricing;

use api\Request;
use api\Response;
use config\SystemConfig;
use config\TalkToOtherServer;

class PricingController
{
    protected Request $request;
    protected Response $response;
    protected TalkToOtherServer $otherServer;
    protected static string $Template_Server_URL;
    protected static string $endpoint;

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;
        $this->otherServer = TalkToOtherServer::getInstance();
        self::$Template_Server_URL = SystemConfig::globalVariables()['template_server']['url'];
        self::$endpoint = SystemConfig::globalVariables()['template_server']['endpoint']['pricing'];
    }

    public function get()
    {
        $this->otherServer->get(
            self::$Template_Server_URL . self::$endpoint,
            function ($res) {
                $this->response->setStatusCode(200)->json([
                    "success" => true,
                    "data" => json_decode($res, true)
                ]);
            },
            function () {
                $this->response->setStatusCode(400)->json([
                    "success" => false,
                    "data" => "Can not connect to the other server."
                ]);
            }
        );
    }

    public function post()
    {
        $data = file_get_contents('php://input');

        $this->otherServer->post(
            self::$Template_Server_URL . self::$endpoint,
            $data,
            function ($res) {
                $this->response->setStatusCode(201)->json([
                    "success" => true,
                    "data" => json_decode($res, true)
                ]);
            },
            function () {
                $this->response->setStatusCode(400)->json([
                    "success" => false,
                    "data" => "Can not connect to the other server."
                ]);
            },
            [
                "Content-Type: application/json"
            ]
        );
    }
}
