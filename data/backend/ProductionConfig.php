<?php
namespace config;

class ProductionConfig {
    private static $mode = "development"; // mode (development or production)
    public static $version = "6.2"; // version of the product

    public static function database() {
        if(self::$mode === "development") {
            return [
                "servername" => "localhost:3306",
                "username" => "root",
                "password" => "",
                "dbName" => "allincli_bio",
            ];
        }
        else if (self::$mode = "production") {
            return [
                "servername" => $_ENV["DATABASE_SERVER_NAME"],
                "username" => $_ENV["DATABASE_USERNAME"],
                "password" => $_ENV["DATABASE_PASSWORD"],
                "dbName" => $_ENV["DATABASE_NAME"],
            ];
        }
    }

    public static function config() {
        if(self::$mode === "development") {
            return [
                'domain' => 'test.allinclicksbio.com',
                'fulldomain' => 'https://test.allinclicksbio.com',
                'stripeRedirect' => 'http://localhost',
            ];
        }
        else if (self::$mode = "production") {
            return [
                'domain' => 'test.allinclicksbio.com',
                'fulldomain' => 'https://test.allinclicksbio.com',
                'stripeRedirect' => 'https://test.allinclicksbio.com',
                // 'domain' => 'allinclicksbio.com',
                // 'fulldomain' => 'https://allinclicksbio.com',
                // 'stripeRedirect' => 'https://allinclicksbio.com',
            ];
        }
    }
}
