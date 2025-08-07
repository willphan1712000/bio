<?php

namespace config;

require_once __DIR__ . '/business/auth/Auth.php';

use business\auth\STRATEGY;
use config\ProductionConfig;
use Throwable;

class SystemConfig
{
    public static function globalVariables()
    {
        return [
            'company_domain' => 'https://allinclicks.com',
            'product_name' => 'Allinclicks Bio',
            'product_year' => date("Y"),
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
                'expire' => '/controllers/client/img/expire.png',
                'deactivate' => '/controllers/client/img/deactivate.png'
            ],
            'deleteWarningMsg' => [
                'msg1' => 'YOUR BIO ACCOUNT WILL BE DEACTIVATED AND HOLD FOR 60 DAYS',
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
            ],
            'template_server' => [
                'url' => ProductionConfig::config()['template_server'],
                'endpoint' => [
                    'template' => '/api/template'
                ]
            ],
            "auth" => [
                "token_property" => "CRM-ctoken", // This name is the property name whenever accessing token from headers of a request,
                "auth_strategy" => STRATEGY::SESSION
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
            "Mobile" => '<div style=""><i class="fa-solid fa-phone"></i></div>',
            "Work" => '<div style=""><i class="fa-solid fa-phone"></i></div>',
            "Email" => '<div style=""><i class="fa-solid fa-envelope"></i></div>',
            "Website" => '<div style=""><i class="fa-solid fa-globe"></i></div>',
            "Booking" => '<div style=""><img style="width: 100%;" class="icon" src="/controllers/client/img/booking.png" alt="element_icon"></div>',
            "OrderOnline" => '<div style=""><img style="width: 100%;" class="icon" src="/controllers/client/img/order.png" alt="element_icon"></div>',
            "Menu" => '<div style=""><img style="width: 100%;" class="icon" src="/controllers/client/img/menu.png" alt="element_icon"></div>',
            "HotSale" => '<div style=""><img style="width: 100%;" class="icon" src="/controllers/client/img/hotsales.png" alt="element_icon"></div>',
            "Address" => '<div style=""><i class="fa-solid fa-location-dot"></i></div>',
            "Facebook" => '<div style=""><i class="fa-brands fa-facebook"></i></div>',
            "Instagram" => '<div style=""><i class="fa-brands fa-instagram"></i></div>',
            "Messenger" => '<div style=""><i class="fa-brands fa-facebook-messenger"></i></div>',
            "Youtube" => '<div style=""><i class="fa-brands fa-youtube"></i></div>',
            "Threads" => '<div style=""><i class="fa-brands fa-threads"></i></div>',
            "X" => '<div style=""><i class="fa-brands fa-x-twitter"></i></div>',
            "Linkedin" => '<div style=""><i class="fa-brands fa-linkedin"></i></div>',
            "Tiktok" => '<div style=""><i class="fa-brands fa-tiktok"></i></div>',
            "Pinterest" => '<div style=""><i class="fa-brands fa-pinterest"></i></div>',
            "Zalo" => '<div style=""><i class="fa-brands fa-viber"></i></div>',
            "Viber" => '<div style=""><i class="fa-brands fa-viber"></i></div>',
            "HotLine" => '<div style=""><i class="fa-solid fa-phone"></i></div>',
            "Whatsapp" => '<div style=""><i class="fa-brands fa-whatsapp"></i></div>',
            "Zalo" => '<div style=""><img style="width: 100%;" class="icon" src="/controllers/client/img/zalo.png" alt="element_icon"></div>'
        ];
    }

    public static function regexMap()
    {
        return [
            'name' => '/^.*$/',
            'image' => '/^.*$/',
            'organization' => '/^.*$/',
            'position' => '/^.*$/',
            'description' => '/.+/s',
            'Email' => '/^[^\s@]+@[^\s@]+\.[^\s@]+$/',
            'Mobile' => '/^\d{10}$/',
            'Work' => '/^\d{10}$/',
            'Booking' => '/^https?:\/\/[^\s]+$/',
            'OrderOnline' => '/^https?:\/\/[^\s]+$/',
            'Menu' => '/^https?:\/\/[^\s]+$/',
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
            'HotLine' => '/^\d+$/',
            'Whatsapp' => '/^\d{10}$/',
        ];
    }

    public static function labelMap()
    {
        return [
            'name' => 'Your Name',
            'position' => 'Position or Job title',
            'organization' => 'Organization',
            'description' => 'A little about yourself',
            'Email' => 'Your email',
            'Mobile' => 'Mobile',
            'Work' => 'Work',
            'Booking' => 'Booking link',
            'OrderOnline' => 'Order Online Link',
            'Menu' => 'Menu link',
            'HotSale' => 'HotSale link',
            'Address' => 'Your Address',
            'Facebook' => 'Facebook link',
            'Instagram' => 'Instagram link',
            'Messenger' => 'Messenger username',
            'Youtube' => 'Youtube link',
            'Threads' => 'Threads link',
            'X' => 'X link',
            'Pinterest' => 'Pinterest link',
            'Linkedin' => 'Linkedin link',
            'Zalo' => 'Zalo phone number',
            'Tiktok' => 'Tiktok link',
            'Website' => 'Website link',
            'Viber' => 'Viber',
            'HotLine' => 'HotLine',
            'Whatsapp' => 'Whatsapp',
        ];
    }

    /**
     * dump and die function used for debugging
     */
    public static function dd($value)
    {
        echo "<pre>";
        var_dump($value);
        echo "</pre>";

        die();
    }

    /** 
     * this function is for extracting url into base or query string.
     * For example, if the url is https://domain/page1/page2/page3. hierarchy 1 will return page3, 2 will return page2, 3 will return page1, and so on.
     * If ignore hierarchy, and pass queryStr, it will return matching queryStr. For example, if the url is https://domain?username=willphan and queryStr is username, it will return willphan.
     */
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

    public static function handleException(Throwable $exception): void
    {
        http_response_code(500);

        echo json_encode([
            "code" => $exception->getCode(),
            "message" => $exception->getMessage(),
            "file" => $exception->getFile(),
            "line" => $exception->getLine()
        ]);
    }

    /**
     * This function will check the current domain, and redirect to the correct domain if necessary
     */
    public static function redirect()
    {
        $domain = $_SERVER['HTTP_HOST'];
        $uri = $_SERVER["REQUEST_URI"];
        $currentDomain = self::globalVariables()["domain"];
        if (ProductionConfig::$mode === Mode::PRODUCTION) {
            if ($domain !== $currentDomain) {
                header("Location: https://" . $currentDomain . $uri);
            }
        }
    }
}
