<?php
require "../core.php";
require "../vendor/autoload.php";
use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;
$json = file_get_contents("php://input");
$body = json_decode($json);

$username = $body->username; // get username
$path = "../".SystemConfig::globalVariables()['user_folder'].$username; // get path to folder
$url = UserManagement::URLGenerator($username, "share"); // get url generated for share
// Check if a folder for a user is created yet
if(!is_dir($path)) {
    if(mkdir($path, 0755, true)) {
        $createFolderSuccess = true;
    }
} else {
    $createFolderSuccess = false;
}
// If so, create QR Code
if($createFolderSuccess) {
    // QR Code Generation Process
    $qr_code = QrCode::create($url)->setSize(600)
    ->setMargin(10);
    $writer = new PngWriter;
    $result = $writer->write($qr_code);
    header("Content-Type: " . $result->getMimeType());
    $result->saveToFile($path."/qr-code.png");
}
echo true;