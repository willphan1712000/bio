<?php
require_once __DIR__ . "/data/backend/Error.php";
require_once __DIR__ . "/vendor/autoload.php";
Dotenv\Dotenv::createImmutable("./")->load();
SESSION_START();

use api\APIRouter;
use config\Router;
use config\SystemConfig;

APIRouter::api_work();

// ==========================================================================

$payment = ['checkout', 'return'];
$user = ['signin', 'signup', 'forgot', 'forgotUsername', 'resetPass', 'restore'];
$template = ['template'];
$warning = ['expire', 'deactivate'];
$admin = ['aic'];
$document = ['terms'];

$pages = array_merge($payment, $user, $template, $warning, $admin, $document);

$router = new Router();
$router->addRoute('/', 'dist/index.php');
for ($i = 0; $i < count($pages); $i++) {
    $router->addRoute('/@' . $pages[$i], 'dist/' . $pages[$i] . '.php');
    $router->addRoute('/@' . $pages[$i] . '/', 'dist/' . $pages[$i] . '.php');
}

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$router->route($uri);
