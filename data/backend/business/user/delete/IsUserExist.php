<?php
namespace business\user\delete;

use business\UserManagement;

class IsUserExist extends DeleteHandler {
    function __construct(?DeleteHandler $next) {
        parent::__construct($next);
    }

    public function doHandle(string $username) : bool {
        return UserManagement::isUserExist($username);
    }
}