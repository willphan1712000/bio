<?php

namespace config;

require_once __DIR__ . "/../../vendor/autoload.php";

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
            'aicAccount' => [
                'username' => 'Allinclicks',
                'password' => '123456'
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
            "Booking" => '<img class="icon" src="/controllers/client/img/booking.png">',
            "OrderOnline" => '<img class="icon" src="/controllers/client/img/order.png">',
            "HotSale" => '<img class="icon" src="/controllers/client/img/hotsales.png">',
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

    // public static function infoArr() {
    //     return ["username", "image", "name", "organization", "description"];
    // }

    public static function socialNameArr()
    {
        return ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];
    }

    // public static function handleLongString($string) {
    //     if($string === "") {
    //         return $string;
    //     }
    //     if(str_contains($string, 'https://')) {
    //         $string = explode("?", $string)[0];
    //     }
    //     if(strlen($string) >= 20) {
    //         $string = substr($string, 0, 20);
    //         $string .= "...";
    //     }
    //     return $string;
    // }

    // public static function makeSpaceBetweenCharacters($string) {
    //     $displayString = $string[0];
    //     for($i = 1; $i < strlen($string); $i++) {
    //         $displayString .= ($string[$i] === strtoupper($string[$i])) ? ' '.$string[$i] : $string[$i];
    //     }
    //     return $displayString;
    // }

    // public static function phoneNumberFormat($value) {
    //     $dial = explode(" ", $value)[1];
    //     $number = explode(" ", $value)[2];
    //     // dial code vietname
    //     if($dial === '+84') {
    //         $number = substr($number, 1);
    //     }
    //     return $dial.' '.$number;
    // }

    // public static function vCardGeneration($username, $filename, $body) {
    //     // VCard content initialization
    //     if(!empty($filename)) {
    //         $imageData = base64_encode(file_get_contents("../user/".$username."/".$filename));
    //     } else {
    //         $imageData = "";
    //     }
    //     // Vcard begins
    //     $vCardContentPhp = '<?php $vCardContent="BEGIN:VCARD\nVERSION:3.0\nREV:2023-12-08T06:00:48Z\n';
    //     $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:'.$imageData.'\n';

    //     foreach($body as $socialName => $value) {
    //         if(!($socialName === 'type' || $socialName === 'src' || $socialName === 'username')) {
    //             if($socialName === 'des'){
    //                 $value = filter_var($value, FILTER_SANITIZE_STRING);
    //             }
    //             if($socialName !== 'image') {
    //                 if($socialName === 'name') {
    //                     $vCardContentPhp .= 'N;CHARSET=utf-8:'.$value.';;;;\nFN;CHARSET=utf-8:'.$value.'\n';
    //                 }
    //                 else if ($socialName === 'description') {
    //                     $vCardContentPhp .= 'NOTE;CHARSET=utf-8:'.$value.'\n';
    //                 }
    //                 else if($socialName === 'Mobile') {
    //                     $vCardContentPhp .= 'TEL;TYPE=Mobile;PREF:'.self::phoneNumberFormat($value).'\n';
    //                 }
    //                 else if($socialName === 'Work') {
    //                     $vCardContentPhp .= 'TEL;TYPE=Work;PREF:'.self::phoneNumberFormat($value).'\n';
    //                 }
    //                 else if($socialName === 'Email') {
    //                     $vCardContentPhp .= 'EMAIL;TYPE=Email:'.$value.'\n';
    //                 }
    //                 else if($socialName === 'Website') {
    //                     $vCardContentPhp .= 'URL:'.self::globalVariables()['domain'].'/'.$username.'\n';
    //                     $vCardContentPhp .= 'URL:'.$value.'\n';
    //                 }
    //                 else if($socialName === 'Address') {
    //                     $ext = ($value !== NULL && $value !== '') ? 'https://google.com/maps/?q=' : '';
    //                     $vCardContentPhp .= 'URL;TYPE=Address:'.$ext.$value.'\n';
    //                 }
    //                 else if($socialName === 'organization') {
    //                     $vCardContentPhp .= 'ORG:'.$value.'\n';
    //                 }
    //                 else {
    //                     $vCardContentPhp .= 'URL;TYPE='.$socialName.':'.$value.'\n';
    //                 }
    //             }
    //         }
    //     }
    //     $vCardContentPhp .= 'END:VCARD";header("Content-type: text/vcard");header("Content-Disposition: attachment; filename=\"contact.vcf\"");echo $vCardContent;';
    //     $vcard = fopen("../user/".$username."/vcard.php", "w");
    //     return !fwrite($vcard, $vCardContentPhp) ? false : true;
    // }

    // this function is for extracting url into base or query string
    public static function URLExtraction($queryStr = null)
    {
        $base = basename(parse_url($_SERVER['REQUEST_URI'])['path']);
        $query = parse_url($_SERVER['REQUEST_URI'])['query'] ?? "";
        parse_str($query, $query_params);
        $result = (isset($query_params[$queryStr]) && $query_params[$queryStr] !== "") ? $query_params[$queryStr] : null;
        return ($queryStr === null) ? $base : $result;
    }
}
