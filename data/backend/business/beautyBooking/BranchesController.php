<?php

namespace business\beautyBooking;

use api\Request;
use api\Response;

class BranchesController
{
    protected Request $request;
    protected Response $response;

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;
    }

    public function get()
    {
        $url = 'https://beautybooking.allinclicks.net/beautyBooking/api/branches';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($ch);

        if (curl_errno($ch)) {
            $return = [
                "success" => false,
                "error" => "There is an  error getting information."
            ];
            $this->response->setStatusCode(500)->json($return);
        } else {
            $return = [
                "success" => true,
                "data" => json_decode($res, true)
            ];
            $this->response->setStatusCode(200)->json($return);
        }

        curl_close($ch);
    }
}
