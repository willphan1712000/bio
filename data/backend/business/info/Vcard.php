<?php

namespace business\info;

use business\info\Info;
use business\info\InfoHandler;
use business\info\operation\Phone;
use config\SystemConfig;

class Vcard extends InfoHandler
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
    }

    public function doHandle(Info $info): bool
    {
        $username = $info->getInfo('username'); // get username
        $userPath = SystemConfig::globalVariables()['user_folder']; // get user folder path

        // Vcard begins
        $vCardContentPhp = '<?php $vCardContent="BEGIN:VCARD\nVERSION:3.0\nREV:2023-12-08T06:00:48Z\n';

        // Vcard body
        $vCardContentPhp .= $info->getInfo('vcard');

        $vCardContentPhp .= 'END:VCARD";header("Content-type: text/vcard");header("Content-Disposition: attachment; filename=\"contact.vcf\"");echo $vCardContent;';

        $filePath = $userPath . $username . "/vcard.php";

        $vcard = fopen($filePath, "w");
        if (!$vcard) {
            throw new \Exception("Failed to open vcard");
        }
        if (!fwrite($vcard, $vCardContentPhp)) {
            throw new \Exception("Failed to write vcard");
        }
        return true;
    }

    protected function getValueFromDatabase(string $getWhat, string $username): ?string
    {
        return null;
    }

    protected function setValueToDatabase(string $setWhat, ?string $value, string $username): bool
    {
        return true;
    }
}
