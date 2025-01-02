<?php

namespace config;

require_once __DIR__ . "/../../vendor/autoload.php";

use Dotenv\Dotenv;

Dotenv::createImmutable(__DIR__ . "./../../")->load();

// Development mode and Production mode
enum Mode
{
    case DEVELOPMENT;
    case PRODUCTION;
}

// Main is main site for bio, Test is test site for bio
enum Type
{
    case MAIN;
    case TEST;
}

// Basic bio and Pro bio
enum Bio
{
    case BASIC;
    case PRO;
}

class ProductionConfig
{
    public static Mode $mode = Mode::PRODUCTION; // mode (development or production)
    public static Type $type = Type::MAIN;
    public static Bio $bio = Bio::BASIC;
    public static $version = "7.2"; // version of the product

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
            switch (self::$type) {
                case Type::MAIN:
                    return [
                        "servername" => $_ENV["DATABASE_SERVER_NAME"],
                        "username" => $_ENV["DATABASE_USERNAME"],
                        "password" => $_ENV["DATABASE_PASSWORD"],
                        "dbName" => $_ENV["DATABASE_NAME"],
                    ];
                case Type::TEST:
                    return [
                        "servername" => $_ENV["DATABASE_SERVER_NAME_TEST"],
                        "username" => $_ENV["DATABASE_USERNAME_TEST"],
                        "password" => $_ENV["DATABASE_PASSWORD_TEST"],
                        "dbName" => $_ENV["DATABASE_NAME_TEST"],
                    ];
                default:
                    return [];
            }
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
            switch (self::$type) {
                case Type::MAIN:
                    return [
                        'domain' => 'allinclicksbio.com',
                        'fulldomain' => 'https://allinclicksbio.com',
                        'stripeRedirect' => 'https://allinclicksbio.com',
                    ];
                case Type::TEST:
                    return [
                        'domain' => 'test.allinclicksbio.com',
                        'fulldomain' => 'https://test.allinclicksbio.com',
                        'stripeRedirect' => 'https://test.allinclicksbio.com',
                    ];
                default:
                    return [];
            }
        }
    }
}
