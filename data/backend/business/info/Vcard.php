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

        // $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:' . $imageData . '\n';

        // foreach ($info->getEntireInfo() as $key => $value) {
        //     if (!in_array($key, ['username', 'src', 'image', 'MobileCode', 'MobileFlag', 'WorkCode', 'WorkFlag', 'ViberCode', 'ViberFlag', 'HotLineCode', 'HotLineFlag'])) {
        //         if ($key === 'name') {
        //             $vCardContentPhp .= 'N;CHARSET=utf-8:' . $value . ';;;;\nFN;CHARSET=utf-8:' . $value . '\n';
        //         } else if ($key === 'description') {
        //             $vCardContentPhp .= 'NOTE;CHARSET=utf-8:' . $value . '\n';
        //         } else if ($key === 'Mobile') {
        //             $vCardContentPhp .= 'TEL;TYPE=Mobile;PREF:' . $o->execute([
        //                 'code' => $info->getInfo('MobileCode'),
        //                 'number' => $info->getInfo('Mobile')
        //             ]) . '\n';
        //         } else if ($key === 'Work') {
        //             $vCardContentPhp .= 'TEL;TYPE=Work;PREF:' . $o->execute([
        //                 'code' => $info->getInfo('WorkCode'),
        //                 'number' => $info->getInfo('Work')
        //             ]) . '\n';
        //         } else if ($key === 'HotLine') {
        //             $vCardContentPhp .= 'TEL;TYPE=Hot Line;PREF:' . $o->execute([
        //                 'code' => $info->getInfo('HotLineCode'),
        //                 'number' => $info->getInfo('HotLine')
        //             ]) . '\n';
        //         } else if ($key === 'Viber') {
        //             $vCardContentPhp .= 'TEL;TYPE=Viber;PREF:' . $o->execute([
        //                 'code' => $info->getInfo('ViberCode'),
        //                 'number' => $info->getInfo('Viber')
        //             ]) . '\n';
        //         } else if ($key === 'Email') {
        //             $vCardContentPhp .= 'EMAIL;TYPE=Email:' . $value . '\n';
        //         } else if ($key === 'Website') {
        //             $vCardContentPhp .= 'URL:' . SystemConfig::globalVariables()['domain'] . '/' . $username . '\n';
        //             $vCardContentPhp .= 'URL:' . $value . '\n';
        //         } else if ($key === 'Address') {
        //             $vCardContentPhp .= 'URL;TYPE=Address:' . $value . '\n';
        //         } else if ($key === 'organization') {
        //             $vCardContentPhp .= 'ORG:' . $value . '\n';
        //         } else {
        //             $vCardContentPhp .= 'URL;TYPE=' . $key . ':' . $value . '\n';
        //         }
        //     }
        // }

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
