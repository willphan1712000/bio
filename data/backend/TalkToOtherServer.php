<?php

namespace config;

class TalkToOtherServer
{
    protected static TalkToOtherServer $instance;

    private function __construct() {}

    public static function getInstance(): TalkToOtherServer
    {
        if (!isset(self::$instance)) {
            self::$instance = new TalkToOtherServer();
        }

        return self::$instance;
    }

    /**
     * This function handles getting or talking to other servers to get data from them
     * @param string $url endponint from other server
     * @param callable $ifSuccessFunc function such that if the request is successful
     * @param callable $ifFailFunc function such that if the request is failed
     */
    public function get(string $url, callable $ifSuccessFunc, callable $ifFailFunc): void
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($ch);

        if (curl_errno($ch)) {
            $ifFailFunc();
        } else {
            $ifSuccessFunc($res);
        }

        curl_close($ch);
    }

    public function getId() {}

    public function put(string $url, callable $ifSuccessFunc, callable $ifFailFunc, array $headers = [])
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        $res = curl_exec($ch);

        if (curl_errno($ch)) {
            $ifFailFunc();
        } else {
            $ifSuccessFunc($res);
        }

        curl_close($ch);
    }

    public function delete(string $url, callable $ifSuccessFunc, callable $ifFailFunc, array $headers = []): void
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        $res = curl_exec($ch);

        if (curl_errno($ch)) {
            $ifFailFunc();
        } else {
            $ifSuccessFunc($res);
        }

        curl_close($ch);
    }
}
