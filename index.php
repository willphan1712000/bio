<?php
require_once __DIR__ . "/data/backend/Error.php";
require_once __DIR__ . "/vendor/autoload.php";
Dotenv\Dotenv::createImmutable("./")->load();
SESSION_START();

use config\Router;

$pages = ['signin', 'signup', 'forgot', 'forgotUsername', 'resetPass', 'aic', 'expire', 'restore', 'template', 'checkout', 'checkoutComplete', 'terms', 'deactivate'];
$router = new Router();
$router->addRoute('/', 'dist/index.php');
for ($i = 0; $i < count($pages); $i++) {
    $router->addRoute('/@' . $pages[$i], 'dist/' . $pages[$i] . '.php');
    $router->addRoute('/@' . $pages[$i] . '/', 'dist/' . $pages[$i] . '.php');
}

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$router->route($uri);
