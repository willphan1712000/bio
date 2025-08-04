<?php

namespace business\analytics;

use business\analytics\AnalyticsFunction;
use api\Request;
use api\Response;
use config\SystemConfig;
use config\TalkToOtherServer;

class AnalyticsController extends AnalyticsFunction
{
    protected Request $request;
    protected Response $response;
    protected TalkToOtherServer $otherServer;
    protected static string $Template_Server_URL;
    protected static string $template_server_endpoint;
    protected static string $Payment_Server_URL;
    protected static string $payment_server_endpoint;

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;
        $this->otherServer = TalkToOtherServer::getInstance();
        self::$Template_Server_URL = SystemConfig::globalVariables()['template_server']['url'];
        self::$template_server_endpoint = SystemConfig::globalVariables()['template_server']['endpoint']['template'];
    }

    /**
     * This function will get every needed analytics information
     */
    public function get()
    {
        $number_of_templates = 20000;
        $nubmer_of_subscription = 0;
        $number_of_users = parent::getTotalUsers();

        $this->response->setStatusCode(200)->json([
            "success" => true,
            "data" => [
                "numberOfTemplates" => $number_of_templates,
                "numberOfSubscriptions" => $nubmer_of_subscription,
                "numberOfUsers" => $number_of_users
            ]
        ]);
    }

    public function getUserSocial()
    {
        $this->response->setStatusCode(200)->json([
            "success" => true,
            "data" => parent::getSocial()
        ]);
    }
}
