<?php

namespace config;

require_once __DIR__ . "/../../vendor/autoload.php";

use Dotenv\Dotenv;

Dotenv::createImmutable(__DIR__ . "./../../")->load();

enum Mode
{
    case DEVELOPMENT;
    case PRODUCTION;
}

class ProductionConfig
{
    public static Mode $mode = Mode::PRODUCTION; // mode (development or production)
    public static $version = "7.0"; // version of the product

    public static function database()
    {
        if (self::$mode === Mode::DEVELOPMENT) {
            return [
                "servername" => $_ENV['DATABASE_SERVER_NAME_DEV'],
                "username" => $_ENV['DATABASE_USERNAME_DEV'],
                "password" => $_ENV['DATABASE_PASSWORD_DEV'],
                "dbName" => $_ENV['DATABASE_NAME_DEV'],
            ];
        } else if (self::$mode = Mode::PRODUCTION) {
            return [
                "servername" => $_ENV["DATABASE_SERVER_NAME"],
                "username" => $_ENV["DATABASE_USERNAME"],
                "password" => $_ENV["DATABASE_PASSWORD"],
                "dbName" => $_ENV["DATABASE_NAME"],
            ];
        }
    }

    public static function config()
    {
        if (self::$mode === Mode::DEVELOPMENT) {
            return [
                'domain' => 'test.allinclicksbio.com',
                'fulldomain' => 'https://test.allinclicksbio.com',
                'stripeRedirect' => 'http://localhost',
            ];
        } else if (self::$mode = Mode::PRODUCTION) {
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
