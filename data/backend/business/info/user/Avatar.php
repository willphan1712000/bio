<?php

namespace business\info\user;

use business\info\display\NormalDisplay;
use business\info\Info;
use business\info\InfoHandler;
use config\SystemConfig;

class Avatar extends User
{
    function __construct(?InfoHandler $next)
    {
        parent::__construct($next);
        $this->name = 'image';
    }

    public function doHandle(Info $info): bool
    {
        try {
            $username = $info->getInfo('username'); // get username
            $old = $this->getValueFromDatabase($this->name, $username); // get old image from database

            $src = $info->getInfo($this->name); // get image source uploaded
            if ($src !== "" && $src !== null && $src !== $old) {
                if ($old !== NULL) {
                    unlink(SystemConfig::globalVariables()['user_folder'] . $username . "/" . $old); // delete old image to save storage
                }

                $new = time() . ".png";
                $info->setInfo($this->name, $new);
                $o = file_put_contents(SystemConfig::globalVariables()['user_folder'] . $username . "/" . $new, base64_decode($src));
                if (!$o) {
                    return false;
                }
                $info->setInfo('vcard', $info->getInfo('vcard') . 'PHOTO;ENCODING=b;TYPE=JPEG:' . $src . '\n');
                return $this->setValueToDatabase($this->name, $new, $info->getInfo('username'));
            }

            $info->setInfo('vcard', $info->getInfo('vcard') . 'PHOTO;ENCODING=b;TYPE=JPEG:' . $src . '\n');

            return $this->setValueToDatabase($this->name, null, $info->getInfo('username'));
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function doUserGET(Info $info): bool
    {
        $value = $this->getValueFromDatabase($this->name, $info->getInfo('username'));
        $info->setInfo($this->name, new NormalDisplay($this->name, $this->format($value)));
        return true;
    }
}
