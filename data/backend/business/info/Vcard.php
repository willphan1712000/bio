<?php
namespace business\info;

require_once __DIR__ ."/../../../../vendor/autoload.php";
use business\info\Info;
use business\info\InfoHandler;
use SystemConfig;

class Push extends InfoHandler {
    function __construct(InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        $username = $info->getInfo('username');
        $userPath = SystemConfig::globalVariables()['user_folder'];
        // VCard content initialization
        if(!empty($filename)) {
            $imageData = base64_encode(file_get_contents($userPath.$username."/".$filename));
        } else {
            $imageData = "";
        }
        // Vcard begins
        $vCardContentPhp = '<?php $vCardContent="BEGIN:VCARD\nVERSION:3.0\nREV:2023-12-08T06:00:48Z\n';
        $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:'.$imageData.'\n';
        $vCardContentPhp .= 'PHOTO;ENCODING=b;TYPE=JPEG:'.$imageData.'\n';
        foreach($body as $socialName => $value) {
            if(!($socialName === 'type' || $socialName === 'src' || $socialName === 'username')) {
                if($socialName === 'des'){
                    $value = filter_var($value, FILTER_SANITIZE_STRING);
                }
                if($socialName !== 'image') {
                    if($socialName === 'name') {
                        $vCardContentPhp .= 'N;CHARSET=utf-8:'.$value.';;;;\nFN;CHARSET=utf-8:'.$value.'\n';
                    }
                    else if ($socialName === 'description') {
                        $vCardContentPhp .= 'NOTE;CHARSET=utf-8:'.$value.'\n';
                    }
                    else if($socialName === 'Mobile') {
                        $vCardContentPhp .= 'TEL;TYPE=Mobile;PREF:'.self::phoneNumberFormat($value).'\n';
                    }
                    else if($socialName === 'Work') {
                        $vCardContentPhp .= 'TEL;TYPE=Work;PREF:'.self::phoneNumberFormat($value).'\n';
                    }
                    else if($socialName === 'Email') {
                        $vCardContentPhp .= 'EMAIL;TYPE=Email:'.$value.'\n';
                    }
                    else if($socialName === 'Website') {
                        $vCardContentPhp .= 'URL:'.self::globalVariables()['domain'].'/'.$username.'\n';
                        $vCardContentPhp .= 'URL:'.$value.'\n';
                    }
                    else if($socialName === 'Address') {
                        $ext = ($value !== NULL && $value !== '') ? 'https://google.com/maps/?q=' : '';
                        $vCardContentPhp .= 'URL;TYPE=Address:'.$ext.$value.'\n';
                    }
                    else if($socialName === 'organization') {
                        $vCardContentPhp .= 'ORG:'.$value.'\n';
                    }
                    else {
                        $vCardContentPhp .= 'URL;TYPE='.$socialName.':'.$value.'\n';
                    }
                }
            }
        }
        $vCardContentPhp .= 'END:VCARD";header("Content-type: text/vcard");header("Content-Disposition: attachment; filename=\"contact.vcf\"");echo $vCardContent;';
        $vcard = fopen("../user/".$username."/vcard.php", "w");
        return !fwrite($vcard, $vCardContentPhp) ? false : true;
    }
}