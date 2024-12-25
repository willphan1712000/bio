<?php

namespace config;

// require_once __DIR__ . "/../../vendor/autoload.php";

use config\ProductionConfig;

class SystemConfig
{
    public static function globalVariables()
    {
        return [
            'product_name' => 'Allinclicks Bio',
            'domain' => ProductionConfig::config()['domain'],
            'fulldomain' => ProductionConfig::config()['fulldomain'],
            'stripeRedirect' => ProductionConfig::config()['stripeRedirect'],
            'v' => ProductionConfig::$version,
            'license' => '© ' . date("Y") . ' Allinclicks. All rights reserved.',
            'title' => 'Bio',
            'userTitle' => 'Bio User',
            'adminTitle' => 'Bio Admin',
            'timeSession' => 15 * 60, // 15 minutes
            'resetExpire' => 10 * 60, // 10 minutes
            'resetExpireTxt' => 10, // 10 minutes
            'rootEmail' => "bio@allinclicksbio.com",
            'img' => [
                'unknown' => '/controllers/client/img/unknown.png',
                'logo' => '/controllers/client/img/logo.png',
                'bio' => '/controllers/client/img/bio.png',
                '404' => '/controllers/client/img/404.png',
                'expire' => '/controllers/client/img/expire.png'
            ],
            'deleteWarningMsg' => [
                'msg1' => 'YOUR BIO ACCOUNT WILL HOLD FOR 60 DAYS',
                'msg2' => 'After this period, your bio account and your information will be permenantly deleted',
                'msg3' => 'You can still restore your account under Sign in section',
                'msg4' => 'Are you sure to proceed?'
            ],
            'restoreWarningMsg' => [
                'msg1' => 'Your account has been deactivated',
                'msg2' => 'You have ',
                'msg3' => ' days left to restore your account for the username ',
                'msg4' => 'Otherwise, your account will be permanently deleted'
            ],
            'accountHoldPeriod' => 60 * 24 * 60 * 60, // 60 days,
            'data_model' => './dataModel/bio.sql',
            'user_folder' => __DIR__ . "/../../user/",
            'absolute_user_folder' => "/user/",
            'aicAccount' => [
                'username' => 'Allinclicks',
                'password' => '123456'
            ],
            'ownerEmail' => 'tonthang@icloud.com',
            'passwordRequirement' => [
                'limit' => 6,
                'char' => 'Password must have at least 6 characters',
                'number' => 'Password must have at least a number',
                'upper' => 'Password must have at least 1 upper case'
            ]
        ];
    }

    public static function emailAuth()
    {
        return [
            'host' => $_ENV["EMAIL_HOST"],
            'username' => $_ENV["EMAIL_USERNAME"],
            'password' => $_ENV["EMAIL_PASSWORD"]
        ];
    }

    public static function socialIconArr()
    {
        return [
            "Mobile" => '<i class="fa-solid fa-phone"></i>',
            "Work" => '<i class="fa-solid fa-phone"></i>',
            "Email" => '<i class="fa-solid fa-envelope"></i>',
            "Website" => '<i class="fa-solid fa-globe"></i>',
            "Booking" => '<img style="width: 100%;" class="icon" src="/controllers/client/img/booking.png">',
            "OrderOnline" => '<img style="width: 100%;" class="icon" src="/controllers/client/img/order.png">',
            "HotSale" => '<img style="width: 100%;" class="icon" src="/controllers/client/img/hotsales.png">',
            "Address" => '<i class="fa-solid fa-location-dot"></i>',
            "Facebook" => '<i class="fa-brands fa-facebook"></i>',
            "Instagram" => '<i class="fa-brands fa-instagram"></i>',
            "Messenger" => '<i class="fa-brands fa-facebook-messenger"></i>',
            "Youtube" => '<i class="fa-brands fa-youtube"></i>',
            "Threads" => '<i class="fa-brands fa-threads"></i>',
            "X" => '<i class="fa-brands fa-x-twitter"></i>',
            "Linkedin" => '<i class="fa-brands fa-linkedin"></i>',
            "Tiktok" => '<i class="fa-brands fa-tiktok"></i>',
            "Pinterest" => '<i class="fa-brands fa-pinterest"></i>',
            "Zalo" => '<i class="fa-brands fa-viber"></i>',
            "Viber" => '<i class="fa-brands fa-viber"></i>',
            "HotLine" => '<i class="fa-solid fa-phone"></i>',
        ];
    }

    public static function regexMap()
    {
        return [
            'name' => '/^.*$/',
            'image' => '/^.*$/',
            'organization' => '/^.*$/',
            'description' => '/^.*$/',
            'Email' => '/^[^\s@]+@[^\s@]+\.[^\s@]+$/',
            'Mobile' => '/^\d{10}$/',
            'Work' => '/^\d{10}$/',
            'Booking' => '/^https?:\/\/[^\s]+$/',
            'OrderOnline' => '/^https?:\/\/[^\s]+$/',
            'HotSale' => '/^https?:\/\/[^\s]+$/',
            'Address' => '/^.*$/',
            'Facebook' => '/^https?:\/\/[^\s]+$/',
            'Instagram' => '/^https?:\/\/[^\s]+$/',
            'Messenger' => '/^.*$/',
            'Youtube' => '/^https?:\/\/[^\s]+$/',
            'Threads' => '/^https?:\/\/[^\s]+$/',
            'X' => '/^https?:\/\/[^\s]+$/',
            'Pinterest' => '/^https?:\/\/[^\s]+$/',
            'Linkedin' => '/^https?:\/\/[^\s]+$/',
            'Zalo' => '/^\d{10}$/',
            'Tiktok' => '/^https?:\/\/[^\s]+$/',
            'Website' => '/^https?:\/\/[^\s]+$/',
            'Viber' => '/^\d{10}$/',
            'HotLine' => '/^\d{10}$/',
        ];
    }

    // dump and die function used for debug process
    public static function dd($value)
    {
        echo "<pre>";
        var_dump($value);
        echo "</pre>";

        die();
    }

    // this function is for extracting url into base or query string
    public static function URLExtraction(int $hierarchy = 1, string $queryStr = null)
    {
        $groups = explode("/", parse_url($_SERVER['REQUEST_URI'])['path']);
        $len = count($groups);
        if ($hierarchy > $len || $hierarchy < 1) {
            throw new \Exception("Invalid hierarchy");
        }
        $query = parse_url($_SERVER['REQUEST_URI'])['query'] ?? "";
        parse_str($query, $query_params);
        $result = (isset($query_params[$queryStr]) && $query_params[$queryStr] !== "") ? $query_params[$queryStr] : null;
        return ($queryStr === null) ? $groups[$len - $hierarchy] : $result;
    }
}
