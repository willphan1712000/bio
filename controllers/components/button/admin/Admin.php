<?php
namespace component\button\admin;
require_once __DIR__."/IAdmin.php";
use component\button\admin\IAdmin;

class Admin implements IAdmin {
    private string $href;
    function __construct($username) {
        $this->href = '/'.$username."/admin";
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