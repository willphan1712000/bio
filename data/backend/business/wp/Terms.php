<?php

namespace business\wp;

use api\Request;
use api\Response;
use config\SystemConfig;
use config\TalkToOtherServer;

class Terms
{
    protected Request $request;
    protected Response $response;
    protected const Page_ID = 2241;
    protected string $endpoint;
    protected TalkToOtherServer $talkToOther;

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;

        $this->endpoint = SystemConfig::globalVariables()['company_domain'] . "/wp-json/wp/v2/pages/" . self::Page_ID;
        $this->talkToOther = TalkToOtherServer::getInstance();
    }

    public function get()
    {
        $this->talkToOther->get(
            $this->endpoint,
            function ($res) {
                $decoded_data = json_decode($res, true);
                $this->response->setStatusCode(200)->json([
                    "success" => true,
                    "data" => $decoded_data["content"]["rendered"]
                    // "data" => $this->endpoint
                ]);
            },
            function () {
                $this->response->setStatusCode(200)->json([
                    "success" => false,
                    "data" => null
                ]);
            }
        );
    }
}
