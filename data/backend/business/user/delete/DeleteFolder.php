<?php
namespace business\user\delete;

use business\user\delete\DeleteHandler;
use config\SystemConfig;

class DeleteFolder extends DeleteHandler {
    function __construct(?DeleteHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(string $username) : bool {
        $path = SystemConfig::globalVariables()['user_folder'].$username;
        if(!is_dir($path)) {
            return false;
        }
        $files = array_diff(scandir($path), array('.', '..'));
        foreach($files as $file) {
            $filePath = $path.'/'.$file;
            if(is_dir($filePath)) {
                $this->doHandle($filePath);
            } else {
                unlink($filePath);
            }
        }
        return rmdir($path);
    }
}