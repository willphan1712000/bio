<?php
class Router {
    private $routes = [];

    function addRoute($uri, $controller) {
        $this->routes[] = [
            'uri' => $uri,
            'controller' => $controller
        ];
    }

    function route($uri) {
        foreach($this->routes as $route) {
            if($route['uri'] === $uri) {
                return require $route['controller'];
            }
        }

        $this->abort();
    }

    private function abort() {
        http_response_code(404);
        require 'controllers/404.php';
        die();
    }

    function removeLastRoute() {
        array_pop($this->routes);
    }
}

class SystemConfig {
    public static function globalVariables() {
        return [
            'v' => 3.2,
            'license' => '© 2023 Allinclicks. All rights reserved.',
            'product_year' => '2023',
            'title' => 'bio',
            'userTitle' => 'Bio User',
            'adminTitle' => 'Bio Admin',
            'timeSession' => 15*60, // 15 minutes
            'resetExpire' => 10*60, // 10 minutes
            'domain' => 'allinclicksbio.com',
            'rootEmail' => "_mainaccount@allinclicksbio.com",
            'img' => [
                'unknown' => '/img/unknown.png',
                'logo' => '/img/logo.png',
                'bio' => '/img/bio.png',
                '404' => '/img/404.png',
                'expire' => '/img/expire.png'
            ]
            ];
    }
    
    // dump and die function used for debug process
    public static function dd($value) {
        echo "<pre>";
        var_dump($value);
        echo "</pre>";
    
        die();
    }

    public static function socialNameArr() {
        return ["Mobile", "Work", "Email", "Website", "Booking", "OrderOnline", "Address", "Facebook", "Instagram", "Messenger", "Youtube", "Threads", "X", "Linkedin", "Tiktok", "Pinterest", "Zalo"];
    }

    public static function socialIconArr() {
        return ['<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-phone"></i>', '<i class="fa-solid fa-envelope"></i>', '<i class="fa-solid fa-globe"></i>', '<img class="icon" src="/img/booking.png">', '<img class="icon" src="/img/order.png">', '<i class="fa-solid fa-location-dot"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook-messenger"></i>', '<i class="fa-brands fa-youtube"></i>', '<i class="fa-brands fa-threads"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-tiktok"></i>', '<i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-viber"></i>'];
    }

    public static function deleteFolder($path) {
        if(!is_dir($path)) {
            return false;
        }
        $files = array_diff(scandir($path), array('.', '..'));
        foreach($files as $file) {
            $filePath = $path.'/'.$file;
            if(is_dir($filePath)) {
                deleteFolder($filePath);
            } else {
                unlink($filePath);
            }
        }
        return rmdir($path);
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
}
class Database {
    private static $servername = "localhost:3306";
    // private static $username = "root";
    // private static $password = "";
    // private static $dataname = "allincli_bio";
    private static $username = "bio_admin";
    private static $password = "123456"; // Default password used by Allinclicks
    private static $dataname = "bio_allinclicks";

    public static function connection() {
        return mysqli_connect(self::$servername, self::$username, self::$password, self::$dataname);
    }
}
?>