<?php
namespace business\info;

// require_once __DIR__ ."/../../../../vendor/autoload.php";
use business\info\Info;
use business\info\InfoHandler;
use config\SystemConfig;
use business\info\OPERATIONNAME;

class Vcard extends InfoHandler {
    function __construct(?InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        $displayOperation = $operationFactory->getOperation(OPERATIONNAME::PHONEDISPLAY->value);
        $username = $info->getInfo('username'); // get username
        $userPath = SystemConfig::globalVariables()['user_folder']; // get user folder path
        $src = $info->getInfo('src'); // get image src

        // VCard content initialization
        if($src !== "" && $src !== NULL) {
            $imageData = $src;
        } else {
            $imageData = "";
        }
        // Vcard begins
        $vCardContentPhp = '<?php $vCardContent="BEGIN:VCARD\nVERSION:3.0\nREV:2023-12-08T06:00:48Z\n';
        $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:'.$imageData.'\n';

        $vCardContentPhp .= 'N;CHARSET=utf-8:'.$info->getInfo('name').';;;;\nFN;CHARSET=utf-8:'.$info->getInfo('name').'\n';
        $vCardContentPhp .= 'NOTE;CHARSET=utf-8:'.$info->getInfo('description').'\n';
        $vCardContentPhp .= 'TEL;TYPE=Mobile;PREF:'.$displayOperation->format([
            'code' => $info->getInfo('MobileCode'),
            'number' => $info->getInfo('Mobile')
        ]).'\n';
        $vCardContentPhp .= 'TEL;TYPE=Work;PREF:'.$displayOperation->format([
            'code' => $info->getInfo('WorkCode'),
            'number' => $info->getInfo('Work')
        ]).'\n';
        $vCardContentPhp .= 'EMAIL;TYPE=Email:'.$info->getInfo('Email').'\n';
        $vCardContentPhp .= 'URL:'.SystemConfig::globalVariables()['domain'].'/'.$username.'\n';
        $vCardContentPhp .= 'URL:'.$info->getInfo('Website').'\n';
        $vCardContentPhp .= 'URL;TYPE=Address:'.$info->getInfo('Address').'\n';
        $vCardContentPhp .= 'ORG:'.$info->getInfo('organization').'\n';

        foreach($info->getEntireInfo() as $key => $value) {
            if(!in_array($key, ['username', 'src', 'image', 'MobileCode', 'MobileFlag', 'WorkCode', 'WorkFlag'])) {
                if($key === 'name') {
                    $vCardContentPhp .= 'N;CHARSET=utf-8:'.$value.';;;;\nFN;CHARSET=utf-8:'.$value.'\n';
                }
                else if ($key === 'description') {
                    $vCardContentPhp .= 'NOTE;CHARSET=utf-8:'.$value.'\n';
                }
                else if($key === 'Mobile') {
                    $vCardContentPhp .= 'TEL;TYPE=Mobile;PREF:'.$displayOperation->format([
                        'code' => $info->getInfo('MobileCode'),
                        'number' => $info->getInfo('Mobile')
                    ]).'\n';
                }
                else if($key === 'Work') {
                    $vCardContentPhp .= 'TEL;TYPE=Work;PREF:'.$displayOperation->format([
                        'code' => $info->getInfo('WorkCode'),
                        'number' => $info->getInfo('Work')
                    ]).'\n';
                }
                else if($key === 'Email') {
                    $vCardContentPhp .= 'EMAIL;TYPE=Email:'.$value.'\n';
                }
                else if($key === 'Website') {
                    $vCardContentPhp .= 'URL:'.SystemConfig::globalVariables()['domain'].'/'.$username.'\n';
                    $vCardContentPhp .= 'URL:'.$value.'\n';
                }
                else if($key === 'Address') {
                    $vCardContentPhp .= 'URL;TYPE=Address:'.$value.'\n';
                }
                else if($key === 'organization') {
                    $vCardContentPhp .= 'ORG:'.$value.'\n';
                }
                else {
                    $vCardContentPhp .= 'URL;TYPE='.$key.':'.$value.'\n';
                }
            }
        }

        $vCardContentPhp .= 'END:VCARD";header("Content-type: text/vcard");header("Content-Disposition: attachment; filename=\"contact.vcf\"");echo $vCardContent;';
        $vcard = fopen($userPath.$username."/vcard.php", "w");
        return !fwrite($vcard, $vCardContentPhp) ? false : true;
    }
}