<?php
require_once "backend/Router.php";
require_once "backend/API.php";
require_once "backend/UserManagement.php";
require_once "backend/Database.php";
require_once "backend/TemplateManagement.php";
require_once "backend/InfoProcess.php";
require_once "backend/DeleteAccount.php";
require_once "backend/Purchase.php";
require_once "backend/Schema.php";
require_once 'vendorDotEnv/autoload.php';
Dotenv\Dotenv::createImmutable("./")->load();

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

class SystemConfig {
    public static function globalVariables() {
        return [
            'product_name' => 'Allinclicks Bio',
            'domain' => ProductionConfig::config()['domain'],
            'fulldomain' => ProductionConfig::config()['fulldomain'],
            'stripeRedirect' => ProductionConfig::config()['stripeRedirect'],
            'v' => ProductionConfig::$version,
            'license' => '© '.date("Y").' Allinclicks. All rights reserved.',
            'title' => 'Bio',
            'userTitle' => 'Bio User',
            'adminTitle' => 'Bio Admin',
            'timeSession' => 15*60, // 15 minutes
            'resetExpire' => 10*60, // 10 minutes
            'resetExpireTxt' => 10, // 10 minutes
            'rootEmail' => "bio@allinclicksbio.com",
            'img' => [
                'unknown' => '/img/unknown.png',
                'logo' => '/img/logo.png',
                'bio' => '/img/bio.png',
                '404' => '/img/404.png',
                'expire' => '/img/expire.png'
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
            'accountHoldPeriod' => 60*24*60*60, // 60 days,
            'data_model' => './dataModel/bio.sql',
            'user_folder' => '../user/',
            'aicAccount' => [
                'username' => 'Allinclicks',
                'password' => '123456'
            ]
        ];
    }

    public static function infoArr() {
        return ["username", "image", "name", "organization", "description"];
    }

    public static function socialNameArr() {
        return ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "HotSale", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];
    }

    public static function socialIconArr() {
        return ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<img class="icon" src="/img/hotsales.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
    }

    public static function emailAuth() {
        return [
            'host' => $_ENV["EMAIL_HOST"],
            'username' => $_ENV["EMAIL_USERNAME"],
            'password' => $_ENV["EMAIL_PASSWORD"]
        ];
    }
    
    // dump and die function used for debug process
    public static function dd($value) {
        echo "<pre>";
        var_dump($value);
        echo "</pre>";
    
        die();
    }
    
    public static function isPassVaild($password) {
        $isLengthValid = false;
        $hasUpperCase = false;
        $hasDigit = false;
        $hasSpecialChar = true; // Bypass special character requirement
        $isLengthValid = (strlen($password) >= 12) ? true : false;
        for($i = 0; $i < strlen($password); $i++) {
            $position = ord($password[$i]); // Get ASCII Value
            if($position >= 65 && $position <= 90) {
                $hasUpperCase = true;
            }
            if($position >= 48 && $position <= 57) {
                $hasDigit = true;
            }
            if($position >= 33 && $position <= 47) {
                $hasSpecialChar = true;
            }
            if($hasUpperCase && $hasDigit && $hasSpecialChar) {
                return true;
            }
        }
    }
    
    public static function handleLongString($string) {
        if($string === "") {
            return $string;
        }
        if(str_contains($string, 'https://')) {
            $string = explode("?", $string)[0];
        }
        if(strlen($string) >= 20) {
            $string = substr($string, 0, 20);
            $string .= "...";
        }
        return $string;
    }

    public static function makeSpaceBetweenCharacters($string) {
        $displayString = $string[0];
        for($i = 1; $i < strlen($string); $i++) {
            $displayString .= ($string[$i] === strtoupper($string[$i])) ? ' '.$string[$i] : $string[$i];
        }
        return $displayString;
    }

    public static function phoneNumberFormat($value) {
        $dial = explode(" ", $value)[1];
        $number = explode(" ", $value)[2];
        // dial code vietname
        if($dial === '+84') {
            $number = substr($number, 1);
        }
        return $dial.' '.$number;
    }

    public static function vCardGeneration($username, $filename, $body) {
        // VCard content initialization
        if(!empty($filename)) {
            $imageData = base64_encode(file_get_contents("../user/".$username."/".$filename));
        } else {
            $imageData = "";
        }
        // Vcard begins
        $vCardContentPhp = '<?php $vCardContent="BEGIN:VCARD\nVERSION:3.0\nREV:2023-12-08T06:00:48Z\n';
        $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:'.$imageData.'\n';
        $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:'.$imageData.'\n';
        foreach($body as $socialName => $value) {
            if(!($socialName === 'type' || $socialName === 'src' || $socialName === 'username')) {
                if($socialName === 'des'){
                    $value = filter_var($value, FILTER_SANITIZE_STRING);
                }
                if($socialName !== 'image') {
                    if($socialName === 'name') {
                        $vCardContentPhp .= 'N;CHARSET=utf-8:'.$value.';;;;\nFN;CHARSET=utf-8:'.$value.'\n';
                    }
                    else if ($socialName === 'description') {
                        $vCardContentPhp .= 'NOTE;CHARSET=utf-8:'.$value.'\n';
                    }
                    else if($socialName === 'Mobile') {
                        $vCardContentPhp .= 'TEL;TYPE=Mobile;PREF:'.SystemConfig::phoneNumberFormat($value).'\n';
                    }
                    else if($socialName === 'Work') {
                        $vCardContentPhp .= 'TEL;TYPE=Work;PREF:'.SystemConfig::phoneNumberFormat($value).'\n';
                    }
                    else if($socialName === 'Email') {
                        $vCardContentPhp .= 'EMAIL;TYPE=Email:'.$value.'\n';
                    }
                    else if($socialName === 'Website') {
                        $vCardContentPhp .= 'URL:'.self::globalVariables()['domain'].'/'.$username.'\n';
                        $vCardContentPhp .= 'URL:'.$value.'\n';
                    }
                    else if($socialName === 'Address') {
                        $ext = ($value !== NULL && $value !== '') ? 'https://google.com/maps/?q=' : '';
                        $vCardContentPhp .= 'URL;TYPE=Address:'.$ext.$value.'\n';
                    }
                    else if($socialName === 'organization') {
                        $vCardContentPhp .= 'ORG:'.$value.'\n';
                    }
                    else {
                        $vCardContentPhp .= 'URL;TYPE='.$socialName.':'.$value.'\n';
                    }
                }
            }
        }
        $vCardContentPhp .= 'END:VCARD";header("Content-type: text/vcard");header("Content-Disposition: attachment; filename=\"contact.vcf\"");echo $vCardContent;';
        $vcard = fopen("../user/".$username."/vcard.php", "w");
        return !fwrite($vcard, $vCardContentPhp) ? false : true;
    }

    // this function is for extracting url into base or query string
    public static function URLExtraction($queryStr = null) {
        $base = basename(parse_url($_SERVER['REQUEST_URI'])['path']);
        $query = parse_url($_SERVER['REQUEST_URI'])['query'] ?? "";
        parse_str($query, $query_params);
        $result = (isset($query_params[$queryStr]) && $query_params[$queryStr] !== "") ? $query_params[$queryStr] : null;
        return ($queryStr === null) ? $base : $result;
    }
}
?>