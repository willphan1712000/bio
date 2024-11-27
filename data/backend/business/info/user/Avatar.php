<?php
namespace business\info\user;

require_once __DIR__ ."/../../../../../vendor/autoload.php";
use business\info\Info;
use business\info\InfoElement;
use business\info\InfoHandler;
use business\info\OperationFactory;
use config\SystemConfig;
use persistence\Database;
use persistence\Entity\UserInfo;

class Avatar extends InfoHandler implements InfoElement {
    function __construct(?InfoHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(Info $info, OperationFactory $operationFactory): bool {
        try {
            $username = $info->getInfo('username'); // get username
            $old = Database::GET(UserInfo::class, 'image', ['username' => $username]); // get old image from database
    
            $src = $info->getInfo('src'); // get image source uploaded
            if($src !== "" && $src !== null) {
                if($old !== NULL) {
                    unlink(SystemConfig::globalVariables()['user_folder'].$username."/".$old); // delete old image to save storage
                }
    
                $new = time().".png";
                $info->setInfo('image', $new);
                $o = file_put_contents(SystemConfig::globalVariables()['user_folder'].$username."/".$new, base64_decode($src));
                if(!$o) {
                    return false;
                }
            }
            return true;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }
}