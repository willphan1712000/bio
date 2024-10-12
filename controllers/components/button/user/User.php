<?php
namespace component\button\user;
require_once __DIR__."/IUser.php";
use component\button\user\IUser;

class User implements IUser {
    private string $href;
    function __construct($username) {
        $this->href = '/'.$username;
    }

    public function html() {
        return '
            <a class="absolute top-0 left-0 w-full h-full flex justify-center items-center" href="'.$this->href.'"></a>
        ';
    }

    public function render() {
        return $this->html();
    }
}