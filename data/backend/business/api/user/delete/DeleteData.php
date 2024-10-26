<?php
namespace business\api\user;

require_once __DIR__."/DeleteHandler.php";
use business\api\user\DeleteHandler;
require_once __DIR__."/../../../../persistence/API.php";
use persistence\API;

class DeleteData extends DeleteHandler {
    function __construct(?DeleteHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(string $username) : bool {
        $user = API::DELETE("user", "username = '$username'");
        $purchase = API::DELETE("purchase", "username = '$username'");

        return $user && $purchase;
    }
}