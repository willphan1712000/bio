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
    public static Mode $mode = Mode::DEVELOPMENT; // mode (development or production)
    public static Type $type = Type::TEST;
    public static Bio $bio = Bio::PRO;
    public static $version = "7.9.3"; // version of the product

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
                'domain' => $_ENV['DOMAIN_DEV'],
                'fulldomain' => $_ENV['DOMAIN_DEV_FULL'],
                'stripeRedirect' => $_ENV['MERCHANT_REDIRECT_DEV'],
                'template_server' => $_ENV['TEMPLATE_SERVER_DEV'],
                'payment_server' => $_ENV['PAYMENT_SERVER_DEV']
            ];
        } else if (self::$mode = Mode::PRODUCTION) {
            switch (self::$type) {
                case Type::MAIN:
                    return [
                        'domain' => $_ENV['DOMAIN_MAIN'],
                        'fulldomain' => $_ENV['DOMAIN_MAIN_FULL'],
                        'stripeRedirect' => $_ENV['MERCHANT_REDIRECT_MAIN'],
                        'template_server' => $_ENV['TEMPLATE_SERVER_MAIN'],
                        'payment_server' => $_ENV['PAYMENT_SERVER_MAIN']
                    ];
                case Type::TEST:
                    return [
                        'domain' => $_ENV['DOMAIN_TEST'],
                        'fulldomain' => $_ENV['DOMAIN_TEST_FULL'],
                        'stripeRedirect' => $_ENV['MERCHANT_REDIRECT_TEST'],
                        'template_server' => $_ENV['TEMPLATE_SERVER_TEST'],
                        'payment_server' => $_ENV['PAYMENT_SERVER_TEST']
                    ];
                default:
                    return [];
            }
        }
    }
}
