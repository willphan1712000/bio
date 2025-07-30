<?php

namespace business\templateManagement;

use api\Request;
use api\Response;
use config\SystemConfig;

/**
 * This class handles talking to template server to manage templates
 */
class TemplateController
{
    protected Request $request;
    protected Response $response;
    protected static string $Template_Server_URL;

    public function __construct(Request $request, Response $response)
    {
        $this->request = $request;
        $this->response = $response;
        if (!isset(self::$Template_Server_URL)) {
            self::$Template_Server_URL = SystemConfig::globalVariables()['template_server'];
        }
    }

    /**
     * This function handles uploading template to the template server
     */
    public function post()
    {
        // $this->response->setStatusCode(200)->json([
        //     "data" => $this->request->getMethod()
        // ]);
        // return;

        // Check for all required files
        $requiredFiles = ['thumbnail', 'template', 'annotation'];
        foreach ($requiredFiles as $field) {
            if (!isset($_FILES[$field])) {
                $return = [
                    "success" => false,
                    "error" => "Missing file: $field."
                ];
                $this->response->setStatusCode(400)->json($return);
                return;
            }
        }

        $postFields = [
            'thumbnail' => new \CURLFile(
                $_FILES['thumbnail']['tmp_name'],
                mime_content_type($_FILES['thumbnail']['tmp_name']),
                $_FILES['thumbnail']['name']
            ),
            'template' => new \CURLFile(
                $_FILES['template']['tmp_name'],
                mime_content_type($_FILES['template']['tmp_name']),
                $_FILES['template']['name']
            ),
            'annotation' => new \CURLFile(
                $_FILES['annotation']['tmp_name'],
                mime_content_type($_FILES['annotation']['tmp_name']),
                $_FILES['annotation']['name']
            ),
        ];

        $ch = curl_init(self::$Template_Server_URL . "/api/upload");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);

        $res = curl_exec($ch);

        if (curl_errno($ch)) {
            $return = [
                "success" => false,
                "error" => "There is an error uploading the files: " . curl_error($ch)
            ];
            $this->response->setStatusCode(500)->json($return);
        } else {
            $return = [
                "success" => true,
                "data" => json_decode($res, true)
            ];
            $this->response->setStatusCode(201)->json($return);
        }

        curl_close($ch);
    }
}
