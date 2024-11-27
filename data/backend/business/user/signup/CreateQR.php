<?php

namespace business\user\signup;

use business\UserManagement;

require __DIR__ . "/vendorQR/autoload.php";

use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;
use config\SystemConfig;

class CreateQR extends SignupHandler
{
    function __construct(?SignupHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Input $input): bool
    {
        $path = SystemConfig::globalVariables()['user_folder'] . $input->getUsername(); // get path to folder
        $url = UserManagement::URLGenerator($input->getUsername(), "share"); // get url generated for share
        // QR Code Generation Process
        $qr_code = QrCode::create($url)->setSize(600)
            ->setMargin(10);
        $writer = new PngWriter;
        $result = $writer->write($qr_code);
        header("Content-Type: " . $result->getMimeType());
        $result->saveToFile($path . "/qr-code.png");
        return true;
    }
}
