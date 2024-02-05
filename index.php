<?php
require_once "data/core.php";
$conn = Database::connection();
$userQuery = mysqli_query($conn, "SELECT *FROM user");
$userArray = [];
$tokenArray = [];
while($row = mysqli_fetch_assoc($userQuery)) {
    $userArray[] = $row;
}

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$router = new Router();
$router->addRoute('/','controllers/index.php');
$router->addRoute('/signin','controllers/signin.php');
$router->addRoute('/signin/','controllers/signin.php');
$router->addRoute('/signup','controllers/signup.php');
$router->addRoute('/signup/','controllers/signup.php');
$router->addRoute('/forgot','controllers/forgot.php');
$router->addRoute('/forgot/','controllers/forgot.php');
$router->addRoute('/forgotUsername','controllers/forgotUsername.php');
$router->addRoute('/forgotUsername/','controllers/forgotUsername.php');
$router->addRoute('/resetPass','controllers/resetPass.php');
$router->addRoute('/resetPass/','controllers/resetPass.php');
for($i = 0; $i < count($userArray); $i++) {
    $router->addRoute('/'.$userArray[$i]['username'], 'controllers/user.php');
    $router->addRoute('/'.$userArray[$i]['username'].'/', 'controllers/user.php');
}
for($i = 0; $i < count($userArray); $i++) {
    $router->addRoute('/'.$userArray[$i]['username'].'/admin', 'controllers/admin.php');
    $router->addRoute('/'.$userArray[$i]['username'].'/admin/', 'controllers/admin.php');
}
for($i = 0; $i < count($userArray); $i++) {
    $router->addRoute('/'.$userArray[$i]['token'], 'controllers/resetPass.php');
}
$router->addRoute('/aic', 'controllers/aic.php');
$router->addRoute('/aic/', 'controllers/aic.php');
$router->addRoute('/emailExpire', 'controllers/expire.php');
$router->addRoute('/emailExpire/', 'controllers/expire.php');
$router->addRoute('/restore', 'controllers/restore.php');
$router->addRoute('/restore/', 'controllers/restore.php');
$router->addRoute('/restoreSignin', 'controllers/restoreSignin.php');
$router->addRoute('/restoreSignin/', 'controllers/restoreSignin.php');
$router->route($uri);