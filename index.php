<?php
require_once "data/core.php";
require_once "data/components/TemplateComponent.php";
require_once "data/components/BioTemplateButton.php";
require_once "data/components/UserFooter.php";
require_once "data/InfoProcess.php";

$conn = Database::connection();
$userQuery = mysqli_query($conn, "SELECT *FROM user");
$userArray = [];
$tokenArray = [];
while($row = mysqli_fetch_assoc($userQuery)) {
    $userArray[] = $row;
}

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$router = new Router();
$router->addRoute('/','dist/index.php');
$router->addRoute('/signin','dist/signin.php');
$router->addRoute('/signin/','dist/signin.php');
$router->addRoute('/signup','dist/signup.php');
$router->addRoute('/signup/','dist/signup.php');
$router->addRoute('/forgot','dist/forgot.php');
$router->addRoute('/forgot/','dist/forgot.php');
$router->addRoute('/forgotUsername','dist/forgotUsername.php');
$router->addRoute('/forgotUsername/','dist/forgotUsername.php');
$router->addRoute('/resetPass','dist/resetPass.php');
$router->addRoute('/resetPass/','dist/resetPass.php');
for($i = 0; $i < count($userArray); $i++) {
    $router->addRoute('/'.$userArray[$i]['username'], 'dist/user.php');
    $router->addRoute('/'.$userArray[$i]['username'].'/', 'dist/user.php');
}
for($i = 0; $i < count($userArray); $i++) {
    $router->addRoute('/'.$userArray[$i]['username'].'/admin', 'dist/admin.php');
    $router->addRoute('/'.$userArray[$i]['username'].'/admin/', 'dist/admin.php');
}
for($i = 0; $i < count($userArray); $i++) {
    $router->addRoute('/'.$userArray[$i]['token'], 'dist/resetPass.php');
}
$router->addRoute('/aic', 'dist/aic.php');
$router->addRoute('/aic/', 'dist/aic.php');
$router->addRoute('/emailExpire', 'dist/expire.php');
$router->addRoute('/emailExpire/', 'dist/expire.php');
$router->addRoute('/restore', 'dist/restore.php');
$router->addRoute('/restore/', 'dist/restore.php');
$router->addRoute('/restoreSignin', 'dist/restoreSignin.php');
$router->addRoute('/restoreSignin/', 'dist/restoreSignin.php');
$router->addRoute('/template', 'dist/template.php');
$router->addRoute('/template/', 'dist/template.php');
$router->addRoute('/checkout/', 'dist/checkout.php');
$router->addRoute('/checkout', 'dist/checkout.php');
$router->addRoute('/checkoutComplete', 'dist/checkoutComplete.php');
$router->addRoute('/checkoutComplete/', 'dist/checkoutComplete.php');
$router->route($uri);