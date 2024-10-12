<?php
namespace component\button\admin;
require_once __DIR__."/IAdmin.php";
use component\button\admin\IAdmin;
require_once __DIR__."/Admin.php";
use component\button\admin\Admin;

class AdminTemplate implements IAdmin {
    private IAdmin $admin;
    private $img;
    function __construct($username, $img) {
        $this->admin = new Admin($username);
        $this->img = $img;
    }

    public function render() {
        return '<div class="btn-ele signin admin relative"><div class="img"><img draggable="false" src="'.$this->img.'"></div><p>Admin</p>'.$this->admin->render().'</div>';
    }
}

function adminTemplate($username, $img) {
    return new AdminTemplate($username, $img);
}